import { CategoriaController } from "../controllers/CategoriaController";
import { Router } from "express";

export const routerCategoria = Router();



const categoriaController = new CategoriaController();



routerCategoria.get("/",categoriaController.listhandle);


routerCategoria.post("/addCat", categoriaController.createhandle.bind(categoriaController));

routerCategoria.get("/search", categoriaController.searchhandle.bind(categoriaController));

routerCategoria.get("/edit", categoriaController.getdatahandle.bind(categoriaController));

routerCategoria.post("/edit", categoriaController.updatehandle.bind(categoriaController));

routerCategoria.post("/delete", categoriaController.deletehandle.bind(categoriaController));