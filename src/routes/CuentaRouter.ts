import { Router } from "express";
import { CuentaController } from "../controllers/CuentaController";

export const routerCuenta = Router();
const createCuentaController = new CuentaController();
const updateCuentaController = new CuentaController();
const deleteCuentaController = new CuentaController();
const getCuentaDataController = new CuentaController();
const autenticationController = new CuentaController

//  ------------- Categoria ---------------

routerCuenta.get('/', function(req,res){
  res.render("login")
})

routerCuenta.post("/",autenticationController.loginautentication);

routerCuenta.get("/registrarse", (request, response) => {
  response.render("registrarse");
});

routerCuenta.post("/registrarse", createCuentaController.createhandle);

routerCuenta.get("/edit" ,getCuentaDataController.getdatahandle);

routerCuenta.post("/edit", updateCuentaController.updatehandle);

routerCuenta.post("/delete", deleteCuentaController.deletehandle);



