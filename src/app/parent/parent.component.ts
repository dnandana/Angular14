import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    title="Welcome parent";
   adlabsInfo:any=[
     {id:1,name:"ravi",work:"design"},
     {id:1,name:"rallu",work:"development"},
   ]
  constructor() { }

  ngOnInit(): void {
    this.createTable();
  }
createTable : any =[];
}
