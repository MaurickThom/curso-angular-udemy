import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active: boolean): any {
    if(active) return value
    return [...Array(value.length)].reduce((acc,curr)=>{
      return acc+'*'
    },'')
  }

}
