class Animal {
    constructor(nombre, tamanio, velocidad) {
        this.Nombre = nombre;
        this.Tamanio = tamanio;
        this.Velocidad = velocidad;
    }

    correr() {
        console.log(`${this.Nombre} corre a ${this.Velocidad} m/s`);
    }
}

let Panda = new Animal("Panda", "Grande", 15);
console.log(Panda);
2;

//extends, vamos a heredar las propiedades de Animal
class Roedor extends Animal {
    constructor(nombre, tamanio, velocidad, saltar, roer) {
        //al constructor padre
        super(nombre, tamanio, velocidad);
        this.Saltar = saltar;
        this.Roer = roer;
    }

    esconder() {
        console.log(`${this.Nombre} salta a ${this.Saltar} cm de altura`);
    }
}

let Raton = new Roedor("Mickey", "pequeño", 30, 50, "mucho");
console.log(Raton);
console.log(Raton.esconder());
console.log(Raton.correr());
