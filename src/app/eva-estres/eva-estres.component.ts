import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eva-estres',
  templateUrl: './eva-estres.component.html',
  styleUrls: ['./eva-estres.component.css']
})
export class EvaEstresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll():void{
    window.scroll(0,0);
  }

}
