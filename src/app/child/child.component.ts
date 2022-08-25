import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   ExamResults : any =[
    {id:1,name:"ravi",ExamResults:98,qualified:"pass"},
    {id:1,name:"aditi",ExamResults:110,qualified:"pass"},
    {id:1,name:"ahana",ExamResults:65,qualified:"fail"},
    
    

   ];
   qualifed : any= [];
   failed : any = [];
  constructor() { }
   
  ngOnInit() {
    this.ExamResults();
  
 
  }
  
  }
