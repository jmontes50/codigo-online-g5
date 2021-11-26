function objPersona() {
    //function constructor
    this.nombre = "Martha";
    this.edad = 32;
}

objPersona.prototype.ciudadOrigen = "Ica";

const nuevaPersona = new objPersona(); //clase

console.log(nuevaPersona.ciudadOrigen);
