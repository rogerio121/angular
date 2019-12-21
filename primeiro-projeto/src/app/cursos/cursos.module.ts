import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    DetalheComponent
  ],
  exports:[
    CursosComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
