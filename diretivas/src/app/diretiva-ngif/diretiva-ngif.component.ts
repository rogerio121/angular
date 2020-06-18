import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = [];
  mostrar: boolean = true;
  constructor() { }

  onMostrarOuEsconder(){
    this.mostrar = !this.mostrar;
  }

  ngOnInit(): void {
  }

}
