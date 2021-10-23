import { Request, Response } from "express";
import { CategoriaService } from "../services/CategoriaService";

// ----------------------------------------------------------------------------------------------------
class CategoriaController{
  async createhandle(request: Request, response: Response) {
    const { nombre} = request.body;

    const createCategoriaService = new CategoriaService();

    try {
      await createCategoriaService.create({
        nombre
      }).then(() => {
        response.render("message", {
          message: "Categoria creado correctamente"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error al crear Categoria: ${err.message}`
      });
    }

  }

  async deletehandle(request: Request, response: Response) {
    const { id} = request.body;

    const deleteCategoriaService = new CategoriaService();

    try {
      await deleteCategoriaService.delete(id).then(() => {
        response.render("message", {
          message: "Categoria eliminado correctamente"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error al eliminaar Categoria: ${err.message}`
      });
    }
  }

  async getdatahandle(request: Request, response: Response) {
    let { id } = request.query;
    id = id.toString();

    const getCategoriaDataService = new CategoriaService();

    const categoria = await getCategoriaDataService.getData(id);

    return response.render("editcategoria", {
      categorias: categoria
    });
  }

  async listhandle(request: Request, response: Response) {
    const listCategoriasService = new CategoriaService();

    const categoria = await listCategoriasService.list();

    return response.render("categorias", {
      categorias: categoria
    });
  }

  async searchhandle(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();

    const searchCategoriaService = new CategoriaService();

    try {
      const categorias = await searchCategoriaService.search(search);
      response.render("search", {
        producto: categorias,
        search: search
      });
    } catch (err) {
      response.render("message", {
        message: ` buscar categoria: ${err.message}`
      });
    }
  }

  async updatehandle(request: Request, response: Response) {
    const { id, nombre} = request.body;

    const updateCategoriaService = new CategoriaService();

    try {
      await updateCategoriaService.update({ id, nombre}).then(() => {
        response.render("message", {
          message: "Categoria actualizado correctamente"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error al actualizar Categoria: ${err.message}`
      });
    }

  }
}

export { CategoriaController };
