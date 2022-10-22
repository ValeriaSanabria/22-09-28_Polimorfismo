"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Herbivoro = void 0;
var mamiferos_1 = require("./mamiferos");
var Herbivoro = /** @class */ (function (_super) {
    __extends(Herbivoro, _super);
    function Herbivoro(pNombre, pEspecie, pTamaño) {
        return _super.call(this, pNombre, pEspecie, pTamaño) || this;
    }
    Herbivoro.prototype.setAlimentacion = function () {
        this.alimentacion = "vegetal";
    };
    return Herbivoro;
}(mamiferos_1.Mamifero));
exports.Herbivoro = Herbivoro;
