import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToastRef, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Route } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import {CfactoresExtralaboralesComponent } from "./cfactores-extralaborales/cfactores-extralaborales.component";
import { FormaAComponent } from './forma-a/forma-a.component';


const routes: Route[] = [

  { path: 'datosGenerales', component: UserFormComponent },
  { path: 'UfactoresExtralaborales', component: CfactoresExtralaboralesComponent },
  { path: 'formaA', component: FormaAComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    CfactoresExtralaboralesComponent,
    FormaAComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
