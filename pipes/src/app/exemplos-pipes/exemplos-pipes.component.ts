import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Javeiros de plantaão',
    estrelas: 4.5321,
    numeroPaginas: 314,
    preco: 44.00, 
    dataLancamento: new Date(2019, 8, 12),
    url: 'https://loiane.training/curso/angular'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
