import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { Table1Component } from './table1/table1.component';


const routes: Routes = [
  {path:"students",component:StudentsComponent},
  {path:"table1",component:Table1Component},
  {path:"login",component:LoginComponent},

];
  @NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
