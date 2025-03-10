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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var helpers_1 = require("./helpers");
var CuentaController_1 = require("../controllers/CuentaController");
var CuentaService_1 = require("../services/CuentaService");
require("../database");
var CuentasRepository_1 = require("../repositories/CuentasRepository");
var typeorm_1 = require("typeorm");
var LocalStrategy = require('passport-local').Strategy;
var cuentaController = new CuentaController_1.CuentaController();
var cuentaService = new CuentaService_1.CuentaService();
var encriptado = new helpers_1.Helpers;
// sing in
passport_1.default.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'contraseña',
}, function (username, contraseña, done) { return __awaiter(void 0, void 0, void 0, function () {
    var cuenta, cuentasRepository, cuentaExist, validPassword;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cuenta = {
                    username: username,
                    contraseña: contraseña,
                };
                cuentasRepository = typeorm_1.getCustomRepository(CuentasRepository_1.CuentasRepository);
                return [4 /*yield*/, cuentasRepository.findOne({ username: username })];
            case 1:
                cuentaExist = _a.sent();
                console.log(cuentaExist);
                if (!!!cuentaExist) return [3 /*break*/, 3];
                return [4 /*yield*/, encriptado.matchContraseña(contraseña, cuentaExist.contraseña)];
            case 2:
                validPassword = _a.sent();
                if (validPassword) {
                    console.log('Sesion iniciada');
                    done(null, cuentaExist);
                }
                else {
                    done(null, false);
                }
                return [3 /*break*/, 4];
            case 3:
                console.log('El Usuario no existe');
                return [2 /*return*/, done(null, false)];
            case 4: return [2 /*return*/];
        }
    });
}); }));
// registro
passport_1.default.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    emailField: 'email',
    passwordField: 'contraseña',
    passReqToCallback: true
}, function (req, username, contraseña, done) { return __awaiter(void 0, void 0, void 0, function () {
    var email, cuenta, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = req.body.email;
                cuenta = {
                    username: username,
                    email: email,
                    contraseña: contraseña,
                };
                console.log(cuenta);
                return [4 /*yield*/, cuentaService.create(cuenta)];
            case 1:
                user = _a.sent();
                console.log(user);
                return [2 /*return*/, done(null, user)];
        }
    });
}); }));
passport_1.default.serializeUser(function (user, done) {
    done(null, user.id);
});
passport_1.default.deserializeUser(function (id, done) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cuentaService.getData(id)];
            case 1:
                user = _a.sent();
                done(null, user);
                return [2 /*return*/];
        }
    });
}); });
