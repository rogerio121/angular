import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ng-class',
  templateUrl: './diretivas-ng-class.component.html',
  styleUrls: ['./diretivas-ng-class.component.scss']
})
export class DiretivasNgClassComponent implements OnInit {

  constructor() { }
  blue: boolean = true;

  ngOnInit(): void {
  }

  onClick(){
    this.blue = !this.blue;
  }
}
