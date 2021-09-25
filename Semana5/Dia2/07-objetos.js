let mascota = {
    nombre: "Backus",
    raza: "Poodle",
    color: "blanco",
    edad: 13,
    hobbies: ["Jugar", "Perseguir gatos", "Comer pate"],
    comer: function () {
        console.log("ñam ñam ñam");
    },
    ladra: true,
};

//objeto.propiedad

// console.log(mascota.nombre);

// console.log(mascota.edad);

// console.log(mascota.hobbies[0]);

// mascota.comer();

let albumMusical = {
    nombre: "After Hours",
    fechaLanzamiento: "20/03/2020",
    genero: ["Dream Pop", "Drum and Bass"],
    canciones: [
        {
            titulo: "Heartless",
            duracion: 3.21,
            autor: ["Abel Tesfaye", "Leland Wayne"],
        },
        {
            titulo: "Blinding Lights",
            duracion: 3.22,
            autor: ["Abel Tesyafe", "Ahmad Balshe", "Jason Quennevile"],
        },
    ],
};

console.log(albumMusical.canciones[1].autor[2]);
