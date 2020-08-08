import { Injectable } from '@angular/core';

@Injectable()
export class CursosService{

    private cursos : string[] = ['Angular', 'Java'];

    getCursos(){
        return this.cursos;
    }

    addCurso(cursos: string){
        this.cursos.push(cursos);
    }
}