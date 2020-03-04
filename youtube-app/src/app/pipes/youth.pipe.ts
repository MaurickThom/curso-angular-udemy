import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
@Pipe({
  name: 'youth'
})
export class YouthPipe implements PipeTransform {

  constructor(
    private domSeguro:DomSanitizer
  ){

  }
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value:string,args:string):any{
    return this.domSeguro.bypassSecurityTrustResourceUrl(args+value)
  }

}
