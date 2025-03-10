"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoController = void 0;
var CategoriaService_1 = require("../services/CategoriaService");
var ProductoService_1 = require("../services/ProductoService");
var ProductoController = /** @class */ (function () {
    function ProductoController() {
    }
    ProductoController.prototype.createhandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nombre, precio, categorias, tipo, cantidad, createProductoService, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, nombre = _a.nombre, precio = _a.precio, categorias = _a.categorias, tipo = _a.tipo, cantidad = _a.cantidad;
                        createProductoService = new ProductoService_1.ProductoServices();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, createProductoService.create({
                                nombre: nombre,
                                precio: precio,
                                categorias: categorias,
                                cantidad: cantidad,
                                tipo: tipo,
                            }).then(function () {
                                response.render("message", {
                                    message: "Producto creado correctamente"
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        response.render("message", {
                            message: "Error al crear Producto: " + err_1.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductoController.prototype.searchCategoria = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var listarcategoria, categorias;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listarcategoria = new CategoriaService_1.CategoriaService();
                        return [4 /*yield*/, listarcategoria.list()];
                    case 1:
                        categorias = _a.sent();
                        return [2 /*return*/, response.render('addproductos', { categorias: categorias })];
                }
            });
        });
    };
    ProductoController.prototype.deletehandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deleteProductoService, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.body.id;
                        deleteProductoService = new ProductoService_1.ProductoServices();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, deleteProductoService.delete(id).then(function () {
                                response.render("message", {
                                    message: "Producto eliminado correctamente"
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        response.render("message", {
                            message: "Error al eliminaar Producto: " + err_2.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductoController.prototype.getdatahandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, getProductoDataService, producto, listarcategoria, categorias;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.query.id;
                        id = id.toString();
                        getProductoDataService = new ProductoService_1.ProductoServices();
                        return [4 /*yield*/, getProductoDataService.getData(id)];
                    case 1:
                        producto = _a.sent();
                        listarcategoria = new CategoriaService_1.CategoriaService();
                        return [4 /*yield*/, listarcategoria.list()];
                    case 2:
                        categorias = _a.sent();
                        return [2 /*return*/, response.render("editproductos", {
                                producto: producto,
                                categorias: categorias
                            })];
                }
            });
        });
    };
    ProductoController.prototype.listhandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var listProductosService, producto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listProductosService = new ProductoService_1.ProductoServices();
                        return [4 /*yield*/, listProductosService.list()];
                    case 1:
                        producto = _a.sent();
                        return [2 /*return*/, response.render("productos", {
                                productos: producto
                            })];
                }
            });
        });
    };
    ProductoController.prototype.searchhandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var search, searchProductoService, productos, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        search = request.query.search;
                        search = search.toString();
                        searchProductoService = new ProductoService_1.ProductoServices();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, searchProductoService.search(search)];
                    case 2:
                        productos = _a.sent();
                        response.render("searchproductos", {
                            productos: productos,
                            search: search
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        response.render("message", {
                            message: " buscar usu\u00E1rio: " + err_3.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductoController.prototype.updatehandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, nombre, precio, categorias, tipo, cantidad, updateProductoService, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id = _a.id, nombre = _a.nombre, precio = _a.precio, categorias = _a.categorias, tipo = _a.tipo, cantidad = _a.cantidad;
                        updateProductoService = new ProductoService_1.ProductoServices();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, updateProductoService.update({ id: id, nombre: nombre, precio: precio, categorias: categorias, tipo: tipo, cantidad: cantidad }).then(function () {
                                response.render("message", {
                                    message: "Producto actualizado correctamente"
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _b.sent();
                        response.render("message", {
                            message: "Error al actualizar Producto: " + err_4.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProductoController;
}());
exports.ProductoController = ProductoController;
