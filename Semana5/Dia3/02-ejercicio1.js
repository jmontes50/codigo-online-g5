/**
 * Ejercicio
 *
 * Tenemos 02 tipos de hamburguesas, Una simple y una doble.
 *
 * Cree un algoritmo que permita pedir X hamburguesas simples o dobles y después dar el total a pagar según el pedido.
 *
 * la hamburguesa simple cuesta 5 soles.
 * la hamburguesa doble cuesta 9 soles.
 */

/**
 * a) que datos necesito?
 * cantidad de simples
 * cantidad de dobles
 * precio de las simples
 * precio de las dobles
 * variable que me diga que ya voy a finalizar el pedido (pedido 1 x 1)
 * b) de donde obtengo esos datos?
 * precio en variables xq ya lo tenemos
 * cantidad de dobles y simples, preguntamos al usuario
 * si finaliza también preguntamos al usuario
 * c) esos datos están en la forma que necesito?
 * cantidades esto tiene que ser númerico
 */

let precioSimple = 5;
let precioDoble = 9;

let cantidadSimple = 0;
let cantidadDobles = 0;
//finalizar me indicará si termino el pedido
//si es true, significa que ya no agregare mas hamburguesas
let finalizar = false;

do {
    //codigo a ejecutar
    let eleccion = +prompt("Ingrese 1.para una Simple, 2. para una Doble y 3 para finalizar el pedido");

    switch (eleccion) {
        case 1:
            console.log("Una simple!!!!");
            cantidadSimple++;
            break;
        case 2:
            console.log("Una doble!!!!");
            cantidadDobles++;
            break;
        case 3:
            finalizar = true;
            break;
        default:
            console.log("Opción Incorrecta");
    }
} while (finalizar == false);

let total = precioSimple * cantidadSimple + precioDoble * cantidadDobles;

console.log(`El total a pagar será de: ${total} por 
${cantidadSimple} hamburguesas Simples y 
${cantidadDobles} por hamburguesas Dobles`);
