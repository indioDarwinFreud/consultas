import { Router } from "express";
import { CuentaController } from "../controllers/CuentaController";

export const routerCuenta = Router();
const createCuentaController = new CuentaController();
const updateCuentaController = new CuentaController();
const deleteCuentaController = new CuentaController();
const getCuentaDataController = new CuentaController();


//  ------------- Categoria ---------------

routerCuenta.get('/login', function(req,res){
  res.render("login")
})

routerCuenta.get("/registrarse", (request, response) => {
  response.render("registrarse");
});

routerCuenta.post("/registrarse", createCuentaController.createhandle);

routerCuenta.get("/edit-Cuentas", getCuentaDataController.getdatahandle);

routerCuenta.post("/edit-Cuentas", updateCuentaController.updatehandle);

routerCuenta.post("/delete-Cuentas", deleteCuentaController.deletehandle);



