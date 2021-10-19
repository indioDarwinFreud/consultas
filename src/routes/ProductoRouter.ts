import { ProductoController } from "../controllers/ProductoController";
import { Router } from "express";

export const routerProductos = Router();

const createProductoController = new ProductoController();
const searchProductoController = new ProductoController();
const updateProductoController = new ProductoController();
const deleteProductoController = new ProductoController();
const listProductosController = new ProductoController();
const getProductoDataController = new ProductoController();


routerProductos.get("/",listProductosController.listhandle);

routerProductos.get("/add", (request, response) => {
  response.render("addproductos");
});

routerProductos.post("/add", createProductoController.createhandle);

routerProductos.get("/search", searchProductoController.searchhandle);

routerProductos.get("/edit", getProductoDataController.getdatahandle);

routerProductos.post("/edit", updateProductoController.updatehandle);

routerProductos.post("/delete", deleteProductoController.deletehandle);