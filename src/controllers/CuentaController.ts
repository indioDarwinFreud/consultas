import { Request, Response } from "express";
import { CuentaService } from "../services/CuentaService";


class CuentaController{

  async createhandle(request: Request, response: Response) {
    const { username, email, contraseña} = request.body;

    const createCuentaService = new CuentaService();

    try {
      await createCuentaService.create({
        username,
        email,
        contraseña,
      }).then(() => {
        response.render("message", {
          message: "Cuenta creado correctamente"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error al crear Cuenta: ${err.message}`
      });
    }

  }

  async deletehandle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteCuentaService = new CuentaService();

    try {
      await deleteCuentaService.delete(id).then(() => {
        response.render("message", {
          message: "Cuenta eliminado correctamente"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error al eliminar Cuenta: ${err.message}`
      });
    }
  }
  async getdatahandle(request: Request, response: Response) {
    let { id } = request.query;
    id = id.toString();

    const getCuentaDataService = new CuentaService();

    const user = await getCuentaDataService.getData(id);

    return response.render("edit", {
      user: user
    });
  }

  async updatehandle(request: Request, response: Response) {
    const { id, username, email, contraseña} = request.body;

    const updateCuentaService = new CuentaService();

    try {
      await updateCuentaService.update({ id, username, email, contraseña}).then(() => {
        response.render("message", {
          message: "Cuenta actualizado correctamente"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error al actualizar Cuenta: ${err.message}`
      });
    }

  }
  
  async loginautentication(request:Request, response: Response){
    const {username, contraseña} = request.body;
    const loginCuentaAutenticacion = new CuentaService;

    try {
      await loginCuentaAutenticacion.autentication({
        username,
        contraseña
      }).then(() => {
        response.render("message", {
          message: "Sesion iniciada"
        });
        response.render("/")
      });
    } catch (err) {
      response.render("message", {
        message: `Error al iniciar Sesion: ${err.message}`
      });
    }
  }
}


export { CuentaController };
