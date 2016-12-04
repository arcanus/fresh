import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import { Cliente } from '../../models/cliente.model';

@Injectable()
export class ClientesService {

  clientes: Cliente[] = [];

  constructor (private http: Http) {}

  addCliente (cliente: Cliente) {
    this.clientes.push(cliente);
    const body = JSON.stringify(cliente);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/clientes/nuevo', body, {headers: headers})
                  .map((response: Response) => response.json())
                  .catch((error: Response) => Observable.throw(error.json()));

  }

  getAllClientes () {
    return this.http.get('http://localhost:3000/clientes/lista')
        .map((response: Response) => {
          const clientes = response.json().obj;
          let formattedClientes: Cliente[] = [];
          for (let c of clientes) {
            formattedClientes.push(new Cliente(c.nombre, c.email, c.telefono, c.perfil_facebook, c.ciudad, c._id));
          }
          this.clientes = formattedClientes;
          return this.clientes;
        })
        .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteCliente (cliente: Cliente) {
    this.clientes.splice(this.clientes.indexOf(cliente), 1);
    return this.http.delete('http://localhost:3000/clientes/' + cliente.id)
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

}
