var Hamburguesa = /** @class */ (function () {
    function Hamburguesa(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = [];
        this.preparacion = "";
        this._ingredienteSecreto = "plancton";
    }
    return Hamburguesa;
}());
var CangreBurguer = new Hamburguesa(1, "Cangreburguer");
console.log(CangreBurguer);
