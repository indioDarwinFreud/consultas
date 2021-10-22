import { Router } from "express";
import { ProductoController } from "../controllers/ProductoController";
export const router = Router()

const list = new ProductoController

router.get("/",function(req, res){
    res.render("index")
  })
