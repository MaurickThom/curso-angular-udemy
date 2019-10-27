import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imageURL: any): string {

    return imageURL ? imageURL.url  : './assets/img/noimage.png'
  }

}
