import { ProductoController } from "../controllers/ProductoController";
import { Router } from "express";
import { CategoriaController } from "../controllers/CategoriaController";

export const routerProductos = Router();
export const routerCategoria = Router();

const productosController = new ProductoController();

const categoriasController = new CategoriaController();

routerProductos.get("/",productosController.listhandle.bind(productosController));
routerProductos.get("/addCateg", (request, response) => {
    response.render("addcategoria");
  });
  routerProductos.post("/addCat", categoriasController.createhandle.bind(categoriasController));
routerProductos.post("/add", productosController.createhandle.bind(productosController));

routerProductos.get("/add", productosController.searchCategoria.bind(productosController));

routerProductos.get("/search", productosController.searchhandle.bind(productosController));

routerProductos.get("/edit", productosController.getdatahandle.bind(productosController));

routerProductos.post("/edit", productosController.updatehandle.bind(productosController));

routerProductos.post("/delete", productosController.deletehandle.bind(productosController));