import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormExtalaborales } from 'src/app/shared/form-extalaborales.model';
import { FormExtalaboralesService } from 'src/app/shared/form-extalaborales.service';


@Component({
  selector: 'app-cfactores-extralaborales',
  templateUrl: './cfactores-extralaborales.component.html',
  styleUrls: ['./cfactores-extralaborales.component.css']
})
export class CfactoresExtralaboralesComponent implements OnInit {

  constructor(public service: FormExtalaboralesService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted Successfully', 'User Register')
      },
      err => { console.log(this.service.formData); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new FormExtalaborales();
  }

  scroll(): void {
    window.scroll(0, 0);
  }


}
