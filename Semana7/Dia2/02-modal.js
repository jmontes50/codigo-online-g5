//estamos creando un objeto Modal a partir de Bootstrap
//new boostrap.ObjetoDeBoostrap(referencia a un elemento HTML)
let miModal = new bootstrap.Modal(document.getElementById("miModal"));

console.log(miModal);

let btnAbrir = document.getElementById("btnAbrir");

btnAbrir.addEventListener("click", function () {
    //metodo que tiene modal de bootstrap, tiene el metodo show()
    miModal.show();
});

// setTimeout(function () {
//     miModal.show();
// }, 5000);
