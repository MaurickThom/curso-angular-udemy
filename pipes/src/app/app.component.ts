import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';
  name = 'thOm roMan aGuIlaR'
  myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('hola mundo !!')
    },5000)
  })

}
