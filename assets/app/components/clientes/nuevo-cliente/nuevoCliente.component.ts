import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente.model';
import { ClientesService } from '../clientes.service';


@Component({
  selector:     'my-nuevoCliente',
  templateUrl:  './nuevoCliente.component.html',
  providers: [ ClientesService ]
})
export class NuevoClienteComponent {

  ciudades = [
    'Neuquen',
    'Cipolletti',
    'Plottier',
    'General Roca',
    'Plaza Huincul',
    'Cutral Có',
    'Zapala',
    'Chos Malal',
    'Centenario',
    'Cinco Saltos'
  ];

  cliente = new Cliente('', '', '', 'Neuquen');

  constructor()
  {
    this.ciudades.sort();
  }

  onSubmit() {
    this.cliente = new Cliente('', '', '', 'Neuquen');
  }

}