import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import { Cliente } from '../../models/cliente.model';

@Injectable()
export class ClientesService {

  private clientesUrl = 'http://localhost:3000/clientes/nuevo';

  constructor (private http: Http) {}

  addCliente (_cliente: Cliente) {
    const body = JSON.stringify(_cliente);
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
          return formattedClientes;
        })
        .catch((error: Response) => Observable.throw(error.json()));
  }

}
