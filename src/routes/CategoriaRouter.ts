import { CategoriaController } from "../controllers/CategoriaController";
import { Router } from "express";

export const routerCategoria = Router();

const createCategoriaController = new CategoriaController();
const searchCategoriaController = new CategoriaController();
const updateCategoriaController = new CategoriaController();
const deleteCategoriaController = new CategoriaController();
const listCategoriasController = new CategoriaController();
const getCategoriaDataController = new CategoriaController();


routerCategoria.get("/",listCategoriasController.listhandle);

routerCategoria.get("/add", (request, response) => {
  response.render("addcategoria");
});

routerCategoria.post("/add", createCategoriaController.createhandle);

routerCategoria.get("/search", searchCategoriaController.searchhandle);

routerCategoria.get("/edit", getCategoriaDataController.getdatahandle);

routerCategoria.post("/edit", updateCategoriaController.updatehandle);

routerCategoria.post("/delete", deleteCategoriaController.deletehandle);