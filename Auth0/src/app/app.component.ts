import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Auth0';
  constructor(
    private auth:AuthService // en este caso este servicio inyectado no puede ser accedido en el html de este componente
  ){
    // muy diferente seria que este publico, en ese caso si estaria disponible el la variable de este servicio en el html del componente
  }
}
