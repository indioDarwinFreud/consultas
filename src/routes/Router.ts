import { Router } from "express";
import { ProductoController } from "../controllers/ProductoController";
export const router = Router()
import { Helpers } from "../lib/helpers";

const protect = new Helpers;
const list = new ProductoController;

router.get("/",protect.isLoggedIn,function(req, res){
    res.render("index");
  });
