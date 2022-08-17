import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { RegisterComponentComponent } from './register-component/register-component.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponentComponent},
  {path:'Parent',component:ParentComponent},
  {path:'Child',component:ChildComponent},
 // {path: 'mytable1',component:mytable1Component},
 // {path: 'mytable3',component:mytable3Component},
//  {path: 'studentsresults',component:studentsresultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }