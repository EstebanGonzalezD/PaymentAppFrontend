import { Injectable } from '@angular/core';
import { FormExtalaborales } from "./form-extalaborales.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormExtalaboralesService {

  constructor(private http:HttpClient) { }

  //Creamos las variables locales

  formData: FormExtalaborales = new FormExtalaborales();
  readonly baseURL = 'http://localhost:50368/api/Extralaborales';
  list: FormExtalaborales[] | undefined;

  //Creamos los métodos
  postPaymentDetail(){
    return this.http.post(this.baseURL, this.formData);
  }

  putPaymentDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.cedula}`, this.formData);
  }

  deletePaymentDetail(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as FormExtalaborales[]);
  }
}
