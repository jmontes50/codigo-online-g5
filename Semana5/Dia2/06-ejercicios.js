//Inventarios

/**
 * Una Bodega quiere hacer un inventario de sus productos.
 * Actualmente vende 03 productos, gaseosa, leche, galletas
 *
 * queremos saber por cada tipo de producto, cuantos tiene en existencia
 *
 * eso si, sabemos el total de productos pero no su cantidad correspondiente a cada tipo
 */

/**
 * Descomposición
 *
 * Manejamos 03 Productos
 * Dice que sabemos el total de todo pero no por tipo
 * tendremos que preguntar producto por producto
 */

/**
 * a) Que datos necesito?
 * total de gaseosa + leche + galletas
 * contar por tipo
 * b) de donde obtengo esos datos?
 * se los pregunto al usuario, prompt
 * c) estan de la forma que necesito?
 * necesito contar 1 x 1, number
 */

let cantProductos = +prompt("Cuantos productos en total tienes?");

let gaseosa = 0;
let leche = 0;
let galletas = 0;

//patrón, voy a preguntar una y otra vez

for (let i = 0; i < cantProductos; i++) {
    let producto = +prompt("Ingrese 1.Gaseosa 2.Leche 3.Galletas");

    switch (producto) {
        case 1:
            gaseosa = gaseosa + 1;
            break;
        case 2:
            leche++;
            break;
        case 3:
            galletas++;
            break;
        default:
            alert("Número erroneo");
            i = i - 1;
        // i --;
    }
}

console.log(`En total hay:
				Gaseosa: ${gaseosa}
				Leche: ${leche}
				Galletas:${galletas}`);
