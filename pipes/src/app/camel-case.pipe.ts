 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    let values = value.split(' ');
    let resultado = '';

    for (const value of values) {
      resultado += this.captalize(value) + ' ';

    }

    return resultado;
  }

  captalize(value: string){
   
    return value.substr(0,1).toUpperCase() + 
    value.substr(1).toLowerCase();
  }

}
