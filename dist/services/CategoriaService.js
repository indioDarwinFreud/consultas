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
exports.CategoriaService = void 0;
var typeorm_1 = require("typeorm");
var Categoria_1 = require("../entities/Categoria");
var CategoriaRepository_1 = require("../repositories/CategoriaRepository");
var CategoriaService = /** @class */ (function () {
    function CategoriaService() {
    }
    CategoriaService.prototype.create = function (_a) {
        var nombre = _a.nombre;
        return __awaiter(this, void 0, void 0, function () {
            var categoriasRepository, idCategoriaAlreadyExists, idcategoriaAlreadyExists, categoria;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!nombre) {
                            throw new Error("Por favor rellene todos los campos");
                        }
                        categoriasRepository = typeorm_1.getCustomRepository(CategoriaRepository_1.CategoriasRepository);
                        return [4 /*yield*/, categoriasRepository.findOne({ nombre: nombre })];
                    case 1:
                        idCategoriaAlreadyExists = _b.sent();
                        if (idCategoriaAlreadyExists) {
                            throw new Error("id producto ya esta registrado");
                        }
                        return [4 /*yield*/, categoriasRepository.findOne(nombre)];
                    case 2:
                        idcategoriaAlreadyExists = _b.sent();
                        categoria = new Categoria_1.Categoria();
                        categoria.nombre = nombre;
                        return [4 /*yield*/, categoriasRepository.save(categoria)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, categoria];
                }
            });
        });
    };
    CategoriaService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var categoriasRepository, categoria;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoriasRepository = typeorm_1.getCustomRepository(CategoriaRepository_1.CategoriasRepository);
                        return [4 /*yield*/, categoriasRepository
                                .createQueryBuilder()
                                .delete()
                                .from(Categoria_1.Categoria)
                                .where("id = :id", { id: id })
                                .execute()];
                    case 1:
                        categoria = _a.sent();
                        return [2 /*return*/, categoria];
                }
            });
        });
    };
    CategoriaService.prototype.getData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var categoriasRepository, producto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoriasRepository = typeorm_1.getCustomRepository(CategoriaRepository_1.CategoriasRepository);
                        return [4 /*yield*/, categoriasRepository.findOne(id)];
                    case 1:
                        producto = _a.sent();
                        return [2 /*return*/, producto];
                }
            });
        });
    };
    CategoriaService.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var categoriasRepository, categoria;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoriasRepository = typeorm_1.getCustomRepository(CategoriaRepository_1.CategoriasRepository);
                        return [4 /*yield*/, categoriasRepository.find()];
                    case 1:
                        categoria = _a.sent();
                        return [2 /*return*/, categoria];
                }
            });
        });
    };
    CategoriaService.prototype.search = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var categoriasRepository, categoria;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!search) {
                            throw new Error("Por favor complete el campo de búsqueda");
                        }
                        categoriasRepository = typeorm_1.getCustomRepository(CategoriaRepository_1.CategoriasRepository);
                        return [4 /*yield*/, categoriasRepository
                                .createQueryBuilder()
                                .where("nombre like :search", { search: "%" + search + "%" })
                                .getMany()];
                    case 1:
                        categoria = _a.sent();
                        return [2 /*return*/, categoria];
                }
            });
        });
    };
    CategoriaService.prototype.update = function (_a) {
        var id = _a.id, nombre = _a.nombre;
        return __awaiter(this, void 0, void 0, function () {
            var categoriasRepository, categoria;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        categoriasRepository = typeorm_1.getCustomRepository(CategoriaRepository_1.CategoriasRepository);
                        return [4 /*yield*/, categoriasRepository
                                .createQueryBuilder()
                                .update(Categoria_1.Categoria)
                                .set({ nombre: nombre })
                                .where("id = :id", { id: id })
                                .execute()];
                    case 1:
                        categoria = _b.sent();
                        return [2 /*return*/, categoria];
                }
            });
        });
    };
    return CategoriaService;
}());
exports.CategoriaService = CategoriaService;
