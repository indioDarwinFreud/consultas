"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var UsuarioRouter_1 = require("./routes/UsuarioRouter");
var ProductoRouter_1 = require("./routes/ProductoRouter");
var CuentaRouter_1 = require("./routes/CuentaRouter");
var CategoriaRouter_1 = require("./routes/CategoriaRouter");
var Router_1 = require("./routes/Router");
require("./database"); //Conexion con la base de datos.
var express_session_1 = __importDefault(require("express-session"));
var passport_1 = __importDefault(require("passport"));
require("./lib/passport");
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var helpers_1 = require("./lib/helpers");
var protect = new helpers_1.Helpers;
var app = express_1.default();
app.use(cookieParser('keyboard cat'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_session_1.default({
    cookie: { maxAge: 999999999 },
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(flash());
//Middleware - rutas
app.use(Router_1.router);
app.use("/user", protect.isLoggedIn, UsuarioRouter_1.routerUser);
app.use("/productos", protect.isLoggedIn, ProductoRouter_1.routerProductos);
app.use("/login", CuentaRouter_1.routerCuenta);
app.use("/categoria", protect.isLoggedIn, CategoriaRouter_1.routerCategoria);
app.use(function (err, request, response, next) {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
    });
});
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "/public")));
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "..", "views"));
app.listen(3000, function () {
    console.log("Server is running at port 3000");
});
