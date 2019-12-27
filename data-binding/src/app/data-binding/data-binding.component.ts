import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent implements OnInit {

  url : string = 'http://loiane.traine';
  cursoAngular : boolean =  true; 
  urlImagem : string = 'http://lorempixel.com/400/200';
  valorAtual : string = '';
  valorSalvo : string;
  isMouseOuver : boolean = false;
  nome : string = 'abc';
  pessoa = {
    nome : 'Rogério',
    idade: 23
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Obrigado porter me clicado!');
  }

  onKeyUp(evento : KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo =valor;
  }

  onMouseOuverOut(){
    this.isMouseOuver = !this.isMouseOuver;
  }
  constructor() { }

  ngOnInit() {
  }

}
