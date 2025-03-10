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
exports.UserController = void 0;
var UserService_1 = require("../services/UserService");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.createhandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, username, email, telefono, ciudad, estado, createUserService, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, username = _a.username, email = _a.email, telefono = _a.telefono, ciudad = _a.ciudad, estado = _a.estado;
                        createUserService = new UserService_1.UserService();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, createUserService.create({
                                username: username,
                                email: email,
                                telefono: telefono,
                                ciudad: ciudad,
                                estado: estado
                            }).then(function () {
                                response.render("message", {
                                    message: "Usuário creado correctamente"
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        response.render("message", {
                            message: "Error al crear usuario: " + err_1.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.deletehandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deleteUserService, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.body.id;
                        deleteUserService = new UserService_1.UserService();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, deleteUserService.delete(id).then(function () {
                                response.render("message", {
                                    message: "Usuário eliminado correctamente"
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        response.render("message", {
                            message: "Error al eliminaar usu\u00E1rio: " + err_2.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.getdatahandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, getUserDataService, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.query.id;
                        id = id.toString();
                        getUserDataService = new UserService_1.UserService();
                        return [4 /*yield*/, getUserDataService.getData(id)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, response.render("edit", {
                                user: user
                            })];
                }
            });
        });
    };
    UserController.prototype.listhandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var listUsersService, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listUsersService = new UserService_1.UserService();
                        return [4 /*yield*/, listUsersService.list()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, response.render("usuarios", {
                                users: users
                            })];
                }
            });
        });
    };
    UserController.prototype.searchhandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var search, searchUserService, users, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        search = request.query.search;
                        search = search.toString();
                        searchUserService = new UserService_1.UserService();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, searchUserService.search(search)];
                    case 2:
                        users = _a.sent();
                        response.render("search", {
                            users: users,
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
    UserController.prototype.updatehandle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, username, email, telefono, ciudad, estado, updateUserService, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id = _a.id, username = _a.username, email = _a.email, telefono = _a.telefono, ciudad = _a.ciudad, estado = _a.estado;
                        updateUserService = new UserService_1.UserService();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, updateUserService.update({ id: id, username: username, email: email, telefono: telefono, ciudad: ciudad, estado: estado }).then(function () {
                                response.render("message", {
                                    message: "Usuário actualizado correctamente"
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _b.sent();
                        response.render("message", {
                            message: "Error al actualizar usuario: " + err_4.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
