import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const routerUser = Router();

const createUserController = new UserController();
const searchUserController = new UserController();
const updateUserController = new UserController();
const deleteUserController = new UserController();
const listUsersController = new UserController();
const getUserDataController = new UserController();

routerUser.get("/",function(req, res){
  res.render("index")
})

routerUser.get("/usuarios", listUsersController.listhandle);

routerUser.get("/add-user", (request, response) => {
  response.render("add");
});

routerUser.post("/add-user", createUserController.createhandle);

routerUser.get("/search", searchUserController.searchhandle);

routerUser.get("/edit", getUserDataController.getdatahandle);

routerUser.post("/edit-user", updateUserController.updatehandle);

routerUser.post("/delete-user", deleteUserController.deletehandle);


