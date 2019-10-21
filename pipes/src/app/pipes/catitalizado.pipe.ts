import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CatitalizadoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args)
    // aquí va la logica xd
    return value;
  }

}
