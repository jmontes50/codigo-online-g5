//solamente las propiedades
//interface = contrato
interface iGato {
	nombre:string,
	color:string,
	raza:string,
	edad:number,
	personalidad:Array<string>,
	antipatico:boolean,
	tamanio:number,
	peludo?:string //OPCIONAL
}

//objeto
let gatita:iGato = {
	nombre:"Gatita",
	color:"Café con Negro",
	raza:"Siames",
	edad:6,
	personalidad:["Amigable","Seria"],
	antipatico:false,
	tamanio:5,
}

//tsc nombre_archivo.ts => nombre_archivo.js
//node nombre_archivo.js