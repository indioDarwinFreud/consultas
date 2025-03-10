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
exports.ProductoServices = void 0;
var typeorm_1 = require("typeorm");
var Producto_1 = require("../entities/Producto");
var CategoriaRepository_1 = require("../repositories/CategoriaRepository");
var ProductosRepository_1 = require("../repositories/ProductosRepository");
var ProductoServices = /** @class */ (function () {
    function ProductoServices() {
    }
    ProductoServices.prototype.create = function (_a) {
        var nombre = _a.nombre, precio = _a.precio, categorias = _a.categorias, cantidad = _a.cantidad;
        return __awaiter(this, void 0, void 0, function () {
            var productosRepository, categoriasRepository, idproductoAlreadyExists, productoActualizado, productoPrecio, categoria, producto;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!nombre || !precio || !categorias || !cantidad) {
                            throw new Error("Por favor rellene todos los campos");
                        }
                        productosRepository = typeorm_1.getCustomRepository(ProductosRepository_1.ProductosRepository);
                        categoriasRepository = typeorm_1.getCustomRepository(CategoriaRepository_1.CategoriasRepository);
                        return [4 /*yield*/, productosRepository.findOne({
                                where: {
                                    nombre: nombre
                                }
                            })];
                    case 1:
                        idproductoAlreadyExists = _b.sent();
                        if (!idproductoAlreadyExists) return [3 /*break*/, 3];
                        productoActualizado = Number(idproductoAlreadyExists.cantidad) + Number(cantidad);
                        productoPrecio = Number(idproductoAlreadyExists.precio) + Number(precio);
                        return [4 /*yield*/, productosRepository.update(idproductoAlreadyExists.id, {
                                cantidad: productoActualizado,
                                precio: productoPrecio,
                            })];
                    case 2:
                        _b.sent();
                        throw new Error("El producto " + idproductoAlreadyExists.nombre + " ya existe. Se a\u00F1adieron " + cantidad + " unidades al stock");
                    case 3: return [4 /*yield*/, categoriasRepository.findOne({ nombre: categorias })];
                    case 4:
                        categoria = _b.sent();
                        console.log(categoria);
                        producto = new Producto_1.Producto();
                        producto.nombre = nombre;
                        producto.precio = precio;
                        producto.tipo = categoria.nombre;
                        producto.cantidad = cantidad;
                        producto.categorias = categoria;
                        return [4 /*yield*/, productosRepository.save(producto)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, producto];
                }
            });
        });
    };
    ProductoServices.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var productosRepository, producto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productosRepository = typeorm_1.getCustomRepository(ProductosRepository_1.ProductosRepository);
                        return [4 /*yield*/, productosRepository
                                .createQueryBuilder()
                                .delete()
                                .from(Producto_1.Producto)
                                .where("id = :id", { id: id })
                                .execute()];
                    case 1:
                        producto = _a.sent();
                        return [2 /*return*/, producto];
                }
            });
        });
    };
    ProductoServices.prototype.getData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var productosRepository, producto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productosRepository = typeorm_1.getCustomRepository(ProductosRepository_1.ProductosRepository);
                        return [4 /*yield*/, productosRepository.findOne(id)];
                    case 1:
                        producto = _a.sent();
                        return [2 /*return*/, producto];
                }
            });
        });
    };
    ProductoServices.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var productoRepository, productos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productoRepository = typeorm_1.getCustomRepository(ProductosRepository_1.ProductosRepository);
                        return [4 /*yield*/, productoRepository.find()];
                    case 1:
                        productos = _a.sent();
                        return [2 /*return*/, productos];
                }
            });
        });
    };
    ProductoServices.prototype.search = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var productosRepository, producto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!search) {
                            throw new Error("Por favor complete el campo de búsqueda");
                        }
                        productosRepository = typeorm_1.getCustomRepository(ProductosRepository_1.ProductosRepository);
                        return [4 /*yield*/, productosRepository
                                .createQueryBuilder()
                                .where("nombre like :search", { search: "%" + search + "%" })
                                .orWhere("precio like :search", { search: "%" + search + "%" })
                                .orWhere("tipo like :search", { search: "%" + search + "%" })
                                .orWhere("cantidad like :search", { search: "%" + search + "%" })
                                .getMany()];
                    case 1:
                        producto = _a.sent();
                        return [2 /*return*/, producto];
                }
            });
        });
    };
    ProductoServices.prototype.update = function (_a) {
        var id = _a.id, nombre = _a.nombre, precio = _a.precio, cantidad = _a.cantidad, categorias = _a.categorias;
        return __awaiter(this, void 0, void 0, function () {
            var productosRepository, categoriasRepository, categoria, producto;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        productosRepository = typeorm_1.getCustomRepository(ProductosRepository_1.ProductosRepository);
                        categoriasRepository = typeorm_1.getCustomRepository(CategoriaRepository_1.CategoriasRepository);
                        return [4 /*yield*/, categoriasRepository.findOne({ nombre: categorias })];
                    case 1:
                        categoria = _b.sent();
                        return [4 /*yield*/, productosRepository
                                .createQueryBuilder()
                                .update(Producto_1.Producto)
                                .set({ nombre: nombre, precio: precio, tipo: categorias, cantidad: cantidad, categorias: categoria })
                                .where("id = :id", { id: id })
                                .execute()];
                    case 2:
                        producto = _b.sent();
                        return [2 /*return*/, producto];
                }
            });
        });
    };
    return ProductoServices;
}());
exports.ProductoServices = ProductoServices;
