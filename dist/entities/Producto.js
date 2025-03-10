"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Categoria_1 = require("./Categoria");
var Producto = /** @class */ (function () {
    function Producto() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Producto.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Producto.prototype, "nombre", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Producto.prototype, "precio", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Producto.prototype, "cantidad", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Producto.prototype, "tipo", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Categoria_1.Categoria; }, function (categoria) { return categoria.productos; }),
        __metadata("design:type", Categoria_1.Categoria)
    ], Producto.prototype, "categorias", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Producto.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Producto.prototype, "updated_at", void 0);
    Producto = __decorate([
        typeorm_1.Entity("productos"),
        __metadata("design:paramtypes", [])
    ], Producto);
    return Producto;
}());
exports.Producto = Producto;
