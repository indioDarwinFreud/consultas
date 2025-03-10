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
exports.CuentaService = void 0;
var typeorm_1 = require("typeorm");
var CuentasRepository_1 = require("../repositories/CuentasRepository");
var Cuenta_1 = require("../entities/Cuenta");
var helpers_1 = require("../lib/helpers");
var CuentaService = /** @class */ (function () {
    function CuentaService() {
    }
    CuentaService.prototype.create = function (_a) {
        var username = _a.username, email = _a.email, contraseña = _a.contraseña;
        return __awaiter(this, void 0, void 0, function () {
            var cuentasRepository, encriptado, usernameAlreadyExists, emailAlreadyExists, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!username || !email || !contraseña) {
                            throw new Error("Por favor rellene todos los campos");
                        }
                        cuentasRepository = typeorm_1.getCustomRepository(CuentasRepository_1.CuentasRepository);
                        encriptado = new helpers_1.Helpers;
                        return [4 /*yield*/, cuentasRepository.findOne({ username: username })];
                    case 1:
                        usernameAlreadyExists = _b.sent();
                        if (usernameAlreadyExists) {
                            throw new Error("Username ya esta registrado");
                        }
                        return [4 /*yield*/, cuentasRepository.findOne({ email: email })];
                    case 2:
                        emailAlreadyExists = _b.sent();
                        if (emailAlreadyExists) {
                            throw new Error("El Email ya esta registrado");
                        }
                        return [4 /*yield*/, encriptado.encryptContraseña(contraseña)];
                    case 3:
                        contraseña = _b.sent();
                        user = cuentasRepository.create({ username: username, email: email, contraseña: contraseña });
                        return [4 /*yield*/, cuentasRepository.save(user)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    CuentaService.prototype.devolverCuenta = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var cuentasRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cuentasRepository = typeorm_1.getCustomRepository(CuentasRepository_1.CuentasRepository);
                        return [4 /*yield*/, cuentasRepository.findOne({ username: username })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CuentaService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cuentaRepository, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cuentaRepository = typeorm_1.getCustomRepository(CuentasRepository_1.CuentasRepository);
                        return [4 /*yield*/, cuentaRepository
                                .createQueryBuilder()
                                .delete()
                                .from(Cuenta_1.Cuenta)
                                .where("id = :id", { id: id })
                                .execute()];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    // async delete(username) {
    //   const cuentaRepository = getCustomRepository(CuentasRepository);
    //   const user = await cuentaRepository
    //     .createQueryBuilder()
    //     .select()
    //     .from(Cuenta,username)
    //     .where({ username })
    //   return user;
    // }
    CuentaService.prototype.getData = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var cuentasRepository, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cuentasRepository = typeorm_1.getCustomRepository(CuentasRepository_1.CuentasRepository);
                        return [4 /*yield*/, cuentasRepository.findOne(username)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    CuentaService.prototype.update = function (_a) {
        var id = _a.id, contraseña = _a.contraseña;
        return __awaiter(this, void 0, void 0, function () {
            var cuentasRepository, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cuentasRepository = typeorm_1.getCustomRepository(CuentasRepository_1.CuentasRepository);
                        return [4 /*yield*/, cuentasRepository
                                .createQueryBuilder()
                                .update(Cuenta_1.Cuenta)
                                .set({ contraseña: contraseña })
                                .where("id = :id", { id: id })
                                .execute()];
                    case 1:
                        user = _b.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    CuentaService.prototype.autentication = function (_a) {
        var username = _a.username, contraseña = _a.contraseña;
        return __awaiter(this, void 0, void 0, function () {
            var desencriptado, cuentasRepository, cuentaAlreadyExists, contraseña_desencriptado;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!username || !contraseña) {
                            throw new Error("Por favor rellene todos los campos");
                        }
                        desencriptado = new helpers_1.Helpers;
                        cuentasRepository = typeorm_1.getCustomRepository(CuentasRepository_1.CuentasRepository);
                        return [4 /*yield*/, cuentasRepository.findOne({ username: username })];
                    case 1:
                        cuentaAlreadyExists = _b.sent();
                        if (!cuentaAlreadyExists) {
                            contraseña_desencriptado = desencriptado.matchContraseña(contraseña, cuentaAlreadyExists.contraseña);
                            console.log(contraseña_desencriptado);
                            if (contraseña_desencriptado) {
                                return [2 /*return*/, true];
                            }
                            else {
                                return [2 /*return*/, false];
                            }
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return CuentaService;
}());
exports.CuentaService = CuentaService;
