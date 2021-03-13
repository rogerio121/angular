import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(){
    return [
      {id:1, nome:'Angular'},
      {id:2, nome:'Java'}
    ]
  }

  getCurso(id: number){
    let cursos = this.getCursos();
    let cursoRetorno = null;

    cursos.forEach((curso: any) => {
      if(curso.id == id){
        console.log('retornou: ', curso)
        cursoRetorno = curso;
      }
    });
    
    return cursoRetorno;
  }

  constructor() { }
}
