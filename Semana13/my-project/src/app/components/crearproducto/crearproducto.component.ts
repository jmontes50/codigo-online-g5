import { Component, OnInit } from '@angular/core';
import iProducto from '../../interfaces/iProducto';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css'],
})
export class CrearproductoComponent implements OnInit {
  constructor(private _sProducto: ProductosService, private router: Router) {}

  nuevoProducto: iProducto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    categoria: 1,
  };

  ngOnInit(): void {}

  crearProducto() {
    this._sProducto.crearNuevoProducto(this.nuevoProducto).subscribe(() => {
      Swal.fire({
        title: 'Producto Creado',
        icon: 'success',
      }).then(() => {
        this.router.navigate(['']);
      });
    });
  }
}
