import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    console.log('Componente en destruccion routes.component.ts');
  }
}
