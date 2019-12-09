import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  title="Template"
  data=null

  paises = [
    {
      codigo:'PE',
      pais:'Peru'
    },{
      codigo:'BR',
      pais:'Brasil'
    },{
      codigo:'AR',
      pais:'Argentina'
    }
  ]
  paisDefault = ""
  sexoDefault = "Masculino"
  sexos:string[] = ['Masculino','Femenino']
  constructor() { }

  ngOnInit() {

    console.log(this.paises[0].pais);
  }
  submit(form:NgForm){
    console.log(form);
    console.log(form.value);
    this.data = {...form.value}
  }
}
