import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
	  //componentes
    AppComponent
  ],
  imports: [
	  //modulos: ruteo, formularios, peticiones
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
	  //servicios: fuentes de datos
	],
	// bootstrap indicara a Angular porque componente va a inicializar
  bootstrap: [AppComponent]
})
//es un archivo para registrar/matricular, todo lo que vamos a utilizar en angular
export class AppModule { }
