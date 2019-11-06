import { Component } from '@angular/core';
import { timer } from 'rxjs';
import {take, tap} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directives';
  cssFontSize = 16;
  isSuccess = true
  isLoading = false
  asincronia(){
    this.isLoading=true
    const timer$ = timer(3000).pipe(
      take(3)
    )
    timer$.subscribe(observer=>{
      this.isLoading=false
    })
  }
}
