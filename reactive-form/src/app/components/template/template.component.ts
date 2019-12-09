import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  title="Template"
  constructor() { }

  ngOnInit() {
  }
  submit(form:NgForm){
    console.log(form);
  }
}
