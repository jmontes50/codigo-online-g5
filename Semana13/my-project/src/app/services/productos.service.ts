import { Injectable } from '@angular/core';
//Es la herramienta que me permite hacer peticiones en angular
import { HttpClient } from '@angular/common/http';
//Observable es la manera que se va a enviar el resultado de mis peticiones, type
import { Observable } from 'rxjs';

import iProducto from '../interfaces/iProducto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  url: string = 'https://616b5ead16c3fa001717167c.mockapi.io/productos';

  //   inyección por dependencias, declarando como una propiedad privada más
  //const _Http =  new HttpClient()
  constructor(private _Http: HttpClient) {}

  obtenerProductos(): Observable<any> {
    return this._Http.get(this.url);
  }

  crearNuevoProducto(nuevoProducto: iProducto): Observable<any> {
    return this._Http.post(this.url, nuevoProducto);
  }
}
