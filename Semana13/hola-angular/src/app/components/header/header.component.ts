import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

	texto:string = "Vacaciones";

	actividades:Array<string> = [
		"Ver películas",
		"Viajar",
		"Probar comida nueva",
		"Nadar",
		"Respirar",
		"Escuchar Música",
		"Salir a cenar",
	]

	losQuiere:boolean = false;

	urlImagen:string = "https://picsum.photos/400"

  constructor() { }

  agregarActividad() {
	  alert("Método ejecutado!!")
  }

  ngOnInit(): void {
  }

}
