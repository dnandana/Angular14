import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServicesService } from '../register-services.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  constructor(private registerServices:RegisterServicesService,private router:Router) { }
   employeesList:any=[];
  ngOnInit(): void {
    this.employeesList=this.registerServices.employeesList;
    console.log("List:::",this.employeesList);
    if(this.employeesList.length<=0){
      this.router.navigate(['/','login']);
    }
  }

}
