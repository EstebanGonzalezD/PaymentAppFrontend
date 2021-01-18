import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forma-b',
  templateUrl: './forma-b.component.html',
  styleUrls: ['./forma-b.component.css']
})
export class FormaBComponent implements OnInit {

  varMostrar1: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  mostrar1(): void {
    this.varMostrar1 = true;
  }

  ocultar1(): void {
    this.varMostrar1 = false;
  }

  scroll():void{
    window.scroll(0,0);
  }

}
