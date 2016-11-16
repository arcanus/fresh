import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { NewUserComponent } from "./users/new-user/newUser.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        UsersComponent,
        NewUserComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
          { path: '', component: HomeComponent, pathMatch: 'full'},
          { path: 'users', component: UsersComponent},
          { path: 'users/new', component: NewUserComponent}
        ])
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
