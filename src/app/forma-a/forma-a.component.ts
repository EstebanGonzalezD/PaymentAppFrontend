import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forma-a',
  templateUrl: './forma-a.component.html',
  styleUrls: ['./forma-a.component.css']
})
export class FormaAComponent implements OnInit {
  varMostrar1:Boolean=false;
  varMostrar2:Boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  mostrar1():void{
    this.varMostrar1=true;
  }

  ocultar1():void{
    this.varMostrar1=false;
  }


  mostrar2():void{
    this.varMostrar2=true;
  }

  ocultar2():void{
    this.varMostrar2=false;
  }


}
