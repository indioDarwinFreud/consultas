import { response, Router } from "express";
import { UserController } from "./controllers/UserController";
import { ProductoController } from "./controllers/ProductoController";

const router = Router();
const createUserController = new UserController();
const searchUserController = new UserController();
const updateUserController = new UserController();
const deleteUserController = new UserController();
const listUsersController = new UserController();
const getUserDataController = new UserController();
const createProductoController = new ProductoController();
const searchProductoController = new ProductoController();
const updateProductoController = new ProductoController();
const deleteProductoController = new ProductoController();
const listProductosController = new ProductoController();
const getProductoDataController = new ProductoController();

router.get('/login', function(req,res){
  res.render("login")
})

router.get("/registrarse",function(req,res){
  res.render("registrarse")
})
router.get("/",function(req, res){
  res.render("index")
})


router.get("/usuarios", listUsersController.listhandle);

router.get("/add-user", (request, response) => {
  response.render("add");
});

router.post("/add-user", createUserController.createhandle);

router.get("/search", searchUserController.searchhandle);

router.get("/edit", getUserDataController.getdatahandle);

router.post("/edit-user", updateUserController.updatehandle);

router.post("/delete-user", deleteUserController.deletehandle);

//  ------------- Productos ---------------


router.get("/productos",listProductosController.listhandle);

router.get("/add-producto", (request, response) => {
  response.render("addproductos");
});

router.post("/add-productos", createProductoController.createhandle);

router.get("/search-productos", searchProductoController.searchhandle);

router.get("/edit-productos", getProductoDataController.getdatahandle);

router.post("/edit-productos", updateProductoController.updatehandle);

router.post("/delete-productos", deleteProductoController.deletehandle);


export { router };
