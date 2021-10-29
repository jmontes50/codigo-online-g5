//dibujar contenido

const divProductos = document.getElementById("productos");

const imprimirProductos = (arregloProductos) => {
    let cardsProductos = ""; //HTML en forma de String
    arregloProductos.forEach(({ nombre, descripcion, precio, imagen, id }) => {
        let cardProd = `<div class="col-6 col-lg-3 mb-2">
							<div class="card">
								<img src="${imagen}" class="card-img-top" alt="...">
								<div class="card-body">
									<h4 class="card-title">
										${nombre}
									</h4>
									<p class="card-text">
										${descripcion}
									</p>
								</div>
							</div>
						</div>`;
    });
};
