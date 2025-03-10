"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCuenta = void 0;
var express_1 = require("express");
var passport_1 = __importDefault(require("passport"));
var helpers_1 = require("../lib/helpers");
var protect = new helpers_1.Helpers;
exports.routerCuenta = express_1.Router();
// Login
exports.routerCuenta.get('/', protect.isNotLoggedIn, function (req, res) {
    res.render("login");
});
exports.routerCuenta.post("/", passport_1.default.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));
// Registrar un usuario
exports.routerCuenta.get("/registrarse", function (request, response) {
    response.render("registrarse");
});
exports.routerCuenta.post('/registrarse', passport_1.default.authenticate('local.signup', {
    successRedirect: '/login',
    failureRedirect: '/login/registrarse',
    failureFlash: true
}));
exports.routerCuenta.get('/logout', function (req, res) {
    req.logOut();
    res.redirect('/');
});
