import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cfactores-extralaborales',
  templateUrl: './cfactores-extralaborales.component.html',
  styleUrls: ['./cfactores-extralaborales.component.css']
})
export class CfactoresExtralaboralesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll():void{
    window.scroll(0,0);
  }


}
