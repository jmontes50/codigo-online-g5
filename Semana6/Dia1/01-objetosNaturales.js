//objeto Date nos sirve para manejar fechas
let hoy = new Date();
//clases (class), plano, diseño, molde
//cuando invocamos una clase utilizamos la palabra new

console.log(hoy);
console.log(typeof hoy);

//Obtengo el año
console.log(hoy.getFullYear());

//Mes, Enero es 0 y Diciembre es 11
console.log(hoy.getMonth());

//Día
console.log(hoy.getDate());

let navidad = new Date(2021, 11, 25);

console.log(navidad);
//getTime() me devuelve el timestamp de navidad
console.log(navidad.getTime());

let hastaNavidad = navidad - hoy;

console.log(hastaNavidad);

let diasParaNavidad = hastaNavidad / 1000 / 60 / 60 / 24;

console.log(diasParaNavidad.toFixed(2));

console.log(navidad.toDateString());

//Math
//Raíz cuadrada
console.log(Math.sqrt(144));

//Potencia
console.log(Math.pow(5, 3));

//Aleatorio
console.log(Math.random());

function aleatorio(min, max) {
    let resultado = Math.random() * (max - min) + min;
    return resultado;
}

console.log(aleatorio(5, 50));

for (let i = 0; i < 5; i++) {
    console.log(aleatorio(5, 50));
}
