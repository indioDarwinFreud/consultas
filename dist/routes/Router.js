"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var ProductoController_1 = require("../controllers/ProductoController");
exports.router = express_1.Router();
var helpers_1 = require("../lib/helpers");
var protect = new helpers_1.Helpers;
var list = new ProductoController_1.ProductoController;
exports.router.get("/", protect.isLoggedIn, function (req, res) {
    res.render("index");
});
