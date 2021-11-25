let saludo = "Hola Mundo!";

console.log(saludo);

//Tipado

let texto:string = "mil";

let cantidad:number = 21;

let teQuiere:boolean = true;

let regalos:Array<string> = ["Flores","Chocolates","Peluches","PS5"];

let random:any = undefined //básicamente cualquier cosa

let random2:unknown = {nombre:"Backus"} //acepta cualquier cosa menos null o undefined

//funciones

let sumar = (num1:number, num2:number):number => {
	return num1 + num2
};

console.log(sumar(10, 200));