import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Route } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CfactoresExtralaboralesComponent } from "./cfactores-extralaborales/cfactores-extralaborales.component";

const routes: Route[] = [
  { path: 'datosGenerales', component: UserFormComponent },
  { path: 'UfactoresExtralaborales', component: CfactoresExtralaboralesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
