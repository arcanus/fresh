import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente.model';
import { ClientesService } from '../clientes.service';
import { NgForm }   from '@angular/forms';


@Component({
  selector:     'my-nuevoCliente',
  templateUrl:  './nuevoCliente.component.html'
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

  cliente = new Cliente('', '', '', '', 'Neuquen', '');

  constructor(private _clientesService: ClientesService)
  {
    this.ciudades.sort();
  }

  onSubmit(f: NgForm) {
    this._clientesService.addCliente(this.cliente).subscribe(
      data => {
        console.log(data);
        f.resetForm();
        this.cliente.ciudad = 'Neuquen';
      },
      error => console.error(error)
    );
  }

}
