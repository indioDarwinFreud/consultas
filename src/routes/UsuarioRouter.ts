import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const routerUser = Router();

const userController = new UserController();

routerUser.get("/", userController.listhandle);

routerUser.get("/add", (request, response) => {
  response.render("add");
});

routerUser.post("/add", userController.createhandle.bind(userController));

routerUser.get("/search", userController.searchhandle.bind(userController));

routerUser.get("/edit", userController.getdatahandle.bind(userController));

routerUser.post("/edit", userController.updatehandle.bind(userController));

routerUser.post("/delete", userController.deletehandle.bind(userController));


