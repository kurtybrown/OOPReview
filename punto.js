"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        return "(" + this.x.toString() + "," + this.y.toString() + ")";
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var distanciaOrigen = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return distanciaOrigen;
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var distanciaOtro = Math.sqrt(Math.pow((this.x - otroPunto.x), 2) + Math.pow((this.y - otroPunto.y), 2));
        return distanciaOtro;
    };
    Punto.prototype.calcularCuadrante = function () {
        if (this.x == 0 || this.y == 0) {
            return 0;
        }
        if (this.x > 0 && this.y > 0) {
            return 1;
        }
        if (this.x < 0 && this.y > 0) {
            return 2;
        }
        if (this.x < 0 && this.y < 0) {
            return 3;
        }
        if (this.x > 0 && this.y < 0) {
            return 4;
        }
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var masCercano;
        var reyDelMomento = this.calcularDistancia(puntos[0]);
        for (var i = 1; i < puntos.length; i++) {
            if (this.calcularDistancia(puntos[i]) < reyDelMomento) {
                reyDelMomento = this.calcularDistancia(puntos[i]);
                masCercano = puntos[i];
            }
        }
        return masCercano;
    };
    return Punto;
}());
exports.Punto = Punto;
