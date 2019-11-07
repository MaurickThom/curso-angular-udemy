import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  
  _alerta:string = 'information'
  _val:boolean= true
  constructor() { }
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
  ngOnInit() {
  }
  changeAlert(){
    if(this._val) {
      this._alerta = 'danger'
    }else{
      this._alerta = 'information'
    }
    this._val = !this._val
  }
}
