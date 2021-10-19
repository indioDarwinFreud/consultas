import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const routerUser = Router();

const createUserController = new UserController();
const searchUserController = new UserController();
const updateUserController = new UserController();
const deleteUserController = new UserController();
const listUsersController = new UserController();
const getUserDataController = new UserController();


routerUser.get("/", listUsersController.listhandle);

routerUser.get("/add", (request, response) => {
  response.render("add");
});

routerUser.post("/add", createUserController.createhandle);

routerUser.get("/search", searchUserController.searchhandle);

routerUser.get("/edit", getUserDataController.getdatahandle);

routerUser.post("/edit", updateUserController.updatehandle);

routerUser.post("/delete", deleteUserController.deletehandle);


