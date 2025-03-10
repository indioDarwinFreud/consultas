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
exports.CuentaController = void 0;
var CuentaService_1 = require("../services/CuentaService");
var CuentaController = /** @class */ (function () {
    function CuentaController() {
    }
    CuentaController.prototype.createhandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, username, email, contraseña, createCuentaService, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, username = _a.username, email = _a.email, contraseña = _a.contraseña;
                        createCuentaService = new CuentaService_1.CuentaService();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, createCuentaService.create({
                                username: username,
                                email: email,
                                contraseña: contraseña,
                            }).then(function () {
                                response.render("message", {
                                    message: "Regristrado creado correctamente"
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        response.render("message", {
                            message: "Error al Regristrarse " + err_1.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CuentaController.prototype.devolverCuentahandle = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, username, email, contraseña, devolverCuenta;
            return __generator(this, function (_b) {
                _a = request.body, username = _a.username, email = _a.email, contraseña = _a.contraseña;
                devolverCuenta = new CuentaService_1.CuentaService();
                devolverCuenta.devolverCuenta({ username: username, email: email, contraseña: contraseña });
                return [2 /*return*/, devolverCuenta];
            });
        });
    };
    CuentaController.prototype.deletehandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deleteCuentaService, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.body.id;
                        deleteCuentaService = new CuentaService_1.CuentaService();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, deleteCuentaService.delete(id).then(function () {
                                response.render("message", {
                                    message: "Cuenta eliminado correctamente"
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        response.render("message", {
                            message: "Error al eliminar Cuenta: " + err_2.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CuentaController.prototype.getdatahandle = function (cuenta) {
        return __awaiter(this, void 0, void 0, function () {
            var username, getCuentaDataService, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = cuenta.username;
                        username = username.toString();
                        getCuentaDataService = new CuentaService_1.CuentaService();
                        return [4 /*yield*/, getCuentaDataService.getData(username)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, { user: user }];
                }
            });
        });
    };
    ;
    CuentaController.prototype.updatehandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, username, email, contraseña, updateCuentaService, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id = _a.id, username = _a.username, email = _a.email, contraseña = _a.contraseña;
                        updateCuentaService = new CuentaService_1.CuentaService();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, updateCuentaService.update({ id: id, username: username, email: email, contraseña: contraseña }).then(function () {
                                response.render("message", {
                                    message: "Cuenta actualizado correctamente"
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _b.sent();
                        response.render("message", {
                            message: "Error al actualizar Cuenta: " + err_3.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CuentaController.prototype.loginautentication = function (cuenta) {
        return __awaiter(this, void 0, void 0, function () {
            var username, contraseña, loginCuentaAutenticacion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = cuenta.username, contraseña = cuenta.contraseña;
                        loginCuentaAutenticacion = new CuentaService_1.CuentaService;
                        return [4 /*yield*/, loginCuentaAutenticacion.autentication({
                                username: username,
                                contraseña: contraseña
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CuentaController;
}());
exports.CuentaController = CuentaController;
