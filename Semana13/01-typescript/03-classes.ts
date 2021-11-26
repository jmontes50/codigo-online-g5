interface iHamburguesa{
	id:number,
	nombre:string,
	ingredientes:Array<string>,
	preparacion:string
	getindredienteSecreto():string //getter
}

class Hamburguesa implements iHamburguesa{
	// propiedades, en JS es opcional
	id;
	nombre;
	ingredientes;
	preparacion;
	private _ingredienteSecreto; //privada
	//solamente es accesible de forma directa dentro de la propia clase
	constructor(id, nombre){
		this.id = id;
		this.nombre = nombre;
		this.ingredientes = [];
		this.preparacion = "";
		this._ingredienteSecreto = "plancton";
	}
	//getter - obtener
	get ingredienteSecreto() {
		return this._ingredienteSecreto;
	}

	//setter - dar
	set ingredienteSecreto(nuevoIngrediente) {
		this._ingredienteSecreto = nuevoIngrediente;
	}
}

let CangreBurguer = new Hamburguesa(1, "Cangreburguer")

CangreBurguer.ingredienteSecreto = "lechuguita"

console.log(CangreBurguer.ingredienteSecreto)