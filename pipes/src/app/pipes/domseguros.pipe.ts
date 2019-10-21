import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
@Pipe({
  name: 'domseguros'
})
export class DomsegurosPipe implements PipeTransform {

  constructor(
    private domSeguro:DomSanitizer
  ){

  }
  transform(value: string, args: string): any {
    console.log(value,args)
    return this.domSeguro.bypassSecurityTrustResourceUrl(args+value);
  }

}
