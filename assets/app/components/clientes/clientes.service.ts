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

}
