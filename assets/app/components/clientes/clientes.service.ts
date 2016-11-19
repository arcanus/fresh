import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Observable }     from 'rxjs/Observable';
//import 'rxjs/operator/map';
//import 'rxjs/Rx';


import { Cliente } from '../../models/cliente.model';

@Injectable()
export class ClientesService {

  //private heroesUrl = 'app/heroes';  // URL to web API
/*
  private clientesUrl = 'http://localhost:3000/clientes/nuevo';

  constructor (private http: Http) {}

  addCliente (_cliente: Cliente): Observable<Cliente> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.clientesUrl, _cliente, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  */
}
