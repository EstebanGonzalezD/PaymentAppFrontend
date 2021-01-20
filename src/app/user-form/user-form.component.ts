import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GeneralData } from 'src/app/shared/general-data.model';
import { GeneralDataService } from 'src/app/shared/general-data.service';
import { GradoEstudio, Sexo, EstadoCivil, TipoVivienda, NumeroDependientes, TiempoEmpresa, Cargo, AreaTrabajo, TipoContrato, HorasEstablecidas, Estrato, TipoPago} from "../../assets/listas";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  GradoEstudio:string[] = GradoEstudio;
  Sexo:string[] = Sexo;
  EstadoCivil:string[] = EstadoCivil;
  TipoVivienda:string[] = TipoVivienda;
  NumeroDependientes:string[] = NumeroDependientes;
  TiempoEmpresa:string[]= TiempoEmpresa;
  Cargo:string[]=Cargo;
  AreaTrabajo:string[]=AreaTrabajo;
  TipoContrato:string[]=TipoContrato;
  HorasEstablecidas:string[]= HorasEstablecidas;
  Estrato:string[] = Estrato;
  TipoPago:string[] = TipoPago;

  constructor(public service: GeneralDataService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
      this.insertRecord(form);
  }
  
  insertRecord(form: NgForm){
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted Successfully','User Register')
      },
      err => {console.log(this.service.formData);}
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new GeneralData();
  }



 
}
