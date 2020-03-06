import { Component, OnInit } from '@angular/core';
import * as pluginAnnotations from 'chartjs-plugin-annotation'
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts'

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40]       , label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90]       , label: 'Series B' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C'}
  ]

  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

  constructor() { }

  ngOnInit(): void {
  }

}
