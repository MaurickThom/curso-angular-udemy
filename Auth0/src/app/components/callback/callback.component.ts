import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(
    private auth:AuthService
  ) { }

  ngOnInit() {
    // this.auth.handleRedirectCallback$.subscribe(data=>{
      
    // })
  }

}
