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

import { ClientesService } from "./components/clientes/clientes.service";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ClientesComponent,
        NuevoClienteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
          { path: '', component: HomeComponent, pathMatch: 'full'},
          { path: 'clientes', component: ClientesComponent},
          { path: 'clientes/nuevo', component: NuevoClienteComponent}
        ])
    ],
    providers: [ClientesService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
