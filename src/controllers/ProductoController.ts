import { Request, Response } from "express";
import { CategoriaService } from "../services/CategoriaService";
import { ProductoServices } from "../services/ProductoService";

class ProductoController {
  async createhandle(request: Request, response: Response) {
    const { nombre, precio, categorias,tipo,  cantidad } = request.body;

    const createProductoService = new ProductoServices();

    try {
      await createProductoService.create({
        nombre,
        precio,
        categorias,
        cantidad,
        tipo,
      }).then(() => {
        response.render("message", {
          message: "Producto creado correctamente"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error al crear Producto: ${err.message}`
      });
    }

  }
  async searchCategoria(request: Request, response: Response) {
    const listarcategoria = new CategoriaService();

    const categorias = await listarcategoria.list()

    return response.render('addproductos', { categorias })
  }

  async deletehandle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteProductoService = new ProductoServices();

    try {
      await deleteProductoService.delete(id).then(() => {
        response.render("message", {
          message: "Producto eliminado correctamente"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error al eliminaar Producto: ${err.message}`
      });
    }
  }

  async getdatahandle(request: Request, response: Response) {
    let { id } = request.query;
    id = id.toString();

    const getProductoDataService = new ProductoServices();

    const producto = await getProductoDataService.getData(id);

    const listarcategoria = new CategoriaService();

    const categorias = await listarcategoria.list()


    return response.render("editproductos", {
      producto: producto,
      categorias: categorias
    });
  }

  async listhandle(request: Request, response: Response) {
    const listProductosService = new ProductoServices();

    const producto = await listProductosService.list();

    return response.render("productos", {
      productos: producto
    });
  }

  async searchhandle(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();

    const searchProductoService = new ProductoServices();

    try {
      const productos = await searchProductoService.search(search);
      response.render("searchproductos", {
        productos: productos,
        search: search
      });
    } catch (err) {
      response.render("message", {
        message: ` buscar usuário: ${err.message}`
      });
    }
  }

  async updatehandle(request: Request, response: Response) {
    const { id, nombre, precio, categorias, tipo, cantidad } = request.body;

    const updateProductoService = new ProductoServices();

    try {
      await updateProductoService.update({ id, nombre, precio, categorias,tipo, cantidad}).then(() => {
        response.render("message", {
          message: "Producto actualizado correctamente"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error al actualizar Producto: ${err.message}`
      });
    }

  }
}

export { ProductoController };
