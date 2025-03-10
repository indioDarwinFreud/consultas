"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUser = void 0;
var express_1 = require("express");
var UserController_1 = require("../controllers/UserController");
exports.routerUser = express_1.Router();
var userController = new UserController_1.UserController();
exports.routerUser.get("/", userController.listhandle);
exports.routerUser.get("/add", function (request, response) {
    response.render("add");
});
exports.routerUser.post("/add", userController.createhandle.bind(userController));
exports.routerUser.get("/search", userController.searchhandle.bind(userController));
exports.routerUser.get("/edit", userController.getdatahandle.bind(userController));
exports.routerUser.post("/edit", userController.updatehandle.bind(userController));
exports.routerUser.post("/delete", userController.deletehandle.bind(userController));
