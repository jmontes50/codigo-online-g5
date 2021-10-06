//Para esta parte usar if y for
//los resultados de preferencia en el discord pero finalizando el tiempo

/**
 * Ej1, crear una función que reciba un arreglo y un nombre
 * Si el nombre existe dentro de la función retornar la posición
 * del nombre encontrado, en caso de no encontrarlo retornar -1
 *
 * Tiempo aprox unos 5 minutos
 */

/**
 * Como sabe la sunat si un RUC es válido?????
 * Hay un dígito verificador
 *
 */

//Ejercicio RUC - Módulo 11
//https://es.wikipedia.org/wiki/C%C3%B3digo_de_control

function verificarRUC(ruc) {
    //verifiquemos que el ruc tenga 11 dígitos
    if (ruc.length == 11) {
        //es correcto
        //porque eventualmente en este bloque de codigo retornare un true
        let factorChequeo = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
        let total = 0;
        for (let i = 0; i < factorChequeo.length; i++) {
            let prod = ruc[i] * factorChequeo[i];
            // total = total + prod
            total += prod;
        }
        console.log("total", total);
        let modulo = total % 11;
        console.log("modulo", modulo);
        let verificador = 11 - modulo;
        console.log(verificador);
        if (verificador == ruc[10]) {
            return true;
        }
    }
    return false;
}

// console.log(verificarRUC("10710093585"));

let pagoHora = +prompt("cuanto es el pago por hora?");

let totalHoras = 0;

for (let i = 1; i <= 6; i++) {
    let cantDiaria = +prompt("cuantas horas fueron hoy?");
    totalHoras += cantDiaria;
}

console.log(`El trabajador tiene ${totalHoras} horas trabajadas con un pago de S/ ${totalHoras * pagoHora}`);

//

let productos = [
    {
        nombre: "Audifonos",
        clave: 1,
        materiaPrima: 20,
    },
    {
        nombre: "Funda para movil",
        clave: 2,
        materiaPrima: 10,
    },
    {
        nombre: "USB",
        clave: 3,
        materiaPrima: 15,
    },
    {
        nombre: "Mouse Gamer",
        clave: 6,
        materiaPrima: 30,
    },
    {
        nombre: "Teclado",
        clave: 4,
        materiaPrima: 120,
    },
    {
        nombre: "Gráfica",
        clave: 5,
        materiaPrima: 200,
    },
];
