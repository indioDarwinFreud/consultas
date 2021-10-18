import { ProductoController } from "../controllers/ProductoController";
import { Router } from "express";

export const routerProductos = Router();

const createProductoController = new ProductoController();
const searchProductoController = new ProductoController();
const updateProductoController = new ProductoController();
const deleteProductoController = new ProductoController();
const listProductosController = new ProductoController();
const getProductoDataController = new ProductoController();


routerProductos.get("/productos",listProductosController.listhandle);

routerProductos.get("/add-producto", (request, response) => {
  response.render("addproductos");
});

routerProductos.post("/add-productos", createProductoController.createhandle);

routerProductos.get("/search-productos", searchProductoController.searchhandle);

routerProductos.get("/edit-productos", getProductoDataController.getdatahandle);

routerProductos.post("/edit-productos", updateProductoController.updatehandle);

routerProductos.post("/delete-productos", deleteProductoController.deletehandle);