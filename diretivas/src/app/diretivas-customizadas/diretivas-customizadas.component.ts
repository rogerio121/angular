import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent implements OnInit {

  mostrar: boolean = true;
  constructor() { }

  onMostrarOuEsconder(){
    this.mostrar = !this.mostrar;
  }
  ngOnInit(): void {
  }

}
