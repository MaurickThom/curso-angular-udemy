import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private api:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  logOut(){
    console.log('entre');
    this.api.logOut()
    this.router.navigateByUrl('/login')
  }
}
