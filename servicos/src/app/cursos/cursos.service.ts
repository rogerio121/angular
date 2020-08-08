import { Injectable, EventEmitter } from '@angular/core';
import {LogService} from '../log.service';
@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter<string>();

    private cursos : string[] = ['Angular', 'Java'];

    constructor(private logService: LogService){

    }

    getCursos(){
        this.logService.log('Obtendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso: string){
        this.logService.log(`Criando curso: ${curso}`)
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
    }
}