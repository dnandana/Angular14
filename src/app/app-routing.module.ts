import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { LmenuComponent } from './lmenu/lmenu.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { RegisterServicesService } from './register-services.service';
import { RmenuComponent } from './rmenu/rmenu.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponentComponent},
  {path:'Parent',component:ParentComponent},
  {path:'Child',component:ChildComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'Lmenu',component:LmenuComponent},
  {path:'Rmenu',component:RmenuComponent},
  {path:'employeesList',component:EmployeesListComponent},
  {path:'registerServices',component:RegisterServicesService},
 // {path: 'mytable1',component:mytable1Component},
 // {path: 'mytable3',component:mytable3Component},
// {path: 'my-app',component:my-app},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }