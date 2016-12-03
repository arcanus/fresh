import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./components/app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { NuevoClienteComponent } from "./components/clientes/nuevo-cliente/nuevoCliente.component";
import { ListaClientesComponent } from "./components/clientes/lista-clientes/listaClientes.component";

import { ClientesService } from "./components/clientes/clientes.service";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ClientesComponent,
        NuevoClienteComponent,
        ListaClientesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
          { path: '', component: HomeComponent, pathMatch: 'full'},
          { path: 'clientes', component: ClientesComponent},
          { path: 'clientes/nuevo', component: NuevoClienteComponent},
          { path: 'clientes/lista', component: ListaClientesComponent}
        ])
    ],
    providers: [ClientesService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
