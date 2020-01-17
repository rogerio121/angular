import { Component, OnInit, Input } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {
  //Para qunado o nome da variável é o mesmo referenciado no componente HTML
  @Input('nome') nomeCurso: string = '';
  //Para qunado o nome da variável é diferente do referenciado no componente HTML
  @Input() nome: string = '';

  constructor() { }

  ngOnInit() {
  }

}
