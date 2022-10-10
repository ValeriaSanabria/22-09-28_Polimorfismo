"use strict";
exports.__esModule = true;
exports.Mamifero = void 0;
var Mamifero = /** @class */ (function () {
    function Mamifero(pNombre, pEspecie, pTamaño) {
        this.nombre = pNombre;
        this.especie = pEspecie;
        this.tamaño = pTamaño;
        this.alimentacion = "leche materna";
    }
    Mamifero.prototype.getNombre = function () {
        return this.nombre;
    };
    Mamifero.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Mamifero.prototype.getEspecie = function () {
        return this.especie;
    };
    Mamifero.prototype.setEspecie = function (pEspecie) {
        this.especie = pEspecie;
    };
    Mamifero.prototype.getTamaño = function () {
        return this.tamaño;
    };
    Mamifero.prototype.setTamaño = function (pTamaño) {
        this.tamaño = pTamaño;
    };
    Mamifero.prototype.getAlimentacion = function () {
        return this.alimentacion;
    };
    Mamifero.prototype.setAlimentacion = function () {
        this.alimentacion = "leche materna";
    };
    return Mamifero;
}());
exports.Mamifero = Mamifero;
