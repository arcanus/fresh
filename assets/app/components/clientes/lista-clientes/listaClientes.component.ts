import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

import { Cliente } from '../../../models/cliente.model';

@Component({
  selector:     'my-listaClientes',
  templateUrl:  './listaClientes.component.html'
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private _clientesService: ClientesService) {}

  ngOnInit() {
    this._clientesService.getAllClientes()
        .subscribe(
          (_clientes: Cliente[]) => {
            this.clientes = _clientes;
            console.log(this.clientes);
          }
        );
  }

  onClickBtnEliminar($cliente) {
    this._clientesService.deleteCliente($cliente)
        .subscribe(
          (cli: Cliente) => {            
            console.log("Cliente eliminado");
          }
        );
  }

}
