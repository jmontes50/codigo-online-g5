var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//alguien influyente
//Experimental
function decoradorGustavo(texto) {
    return function (target) {
        target.prototype.presentacion = function () {
            console.log("Buenos d\u00EDas, soy ".concat(texto));
            target.vestimenta = ["Vestido", "Sombrero"];
            target.vestimenta.forEach(function (prenda) { return console.log(prenda); });
        };
    };
}
var Persona = /** @class */ (function () {
    function Persona(ropa) {
        this.vestimenta = ropa;
    }
    Persona.prototype.presentacion = function (nombre) {
        console.log("Hola soy ".concat(nombre));
        this.vestimenta.forEach(function (prenda) { return console.log(prenda); });
    };
    Persona = __decorate([
        decoradorGustavo("Maria Perez")
    ], Persona);
    return Persona;
}());
var persona1 = new Persona(["jeans", "polo", "zapatillas"]);
persona1.presentacion("Maria");
