import { response, Router } from "express";
import { CuentaController } from "../controllers/CuentaController";
import passport from "passport";
import { Helpers } from "../lib/helpers";
const protect = new Helpers;

export const routerCuenta = Router();


// Login

routerCuenta.get('/',protect.isNotLoggedIn, function(req,res){
  res.render("login")
})

routerCuenta.post("/",passport.authenticate('local.signin',{
  
  successRedirect:'/',
  failureRedirect:'/login',
  failureFlash: true
}));

// Registrar un usuario

routerCuenta.get("/registrarse", (request, response) => {
  response.render("registrarse");
});

routerCuenta.post('/registrarse',passport.authenticate('local.signup',{
  
  successRedirect:'/login',
  failureRedirect:'/login/registrarse',
  failureFlash: true
}));

routerCuenta.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});





