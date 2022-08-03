import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  constructor() { }
  
  testResult:any=[];
  table:any=[];

  ngOnInit()  {
    for(let x = 1; x<=10; x++){
      console.log(x);
    }
  }

}