import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     loginForm: any= FormGroup;
     submitted:boolean=false;
    constructor(
       private formBuilder: FormBuilder,
       private router: Router,
    ){  }
  ngOnInit(): void{
     this.loginForm = this.formBuilder.group({
      usr: ['', [Validators.required,Validators.email]],
      pwd: ['', Validators.required,Validators.email]
     
    });
}

get f() { return this.loginForm.controls;}
 
onSubmit(){
    console.log(this.loginForm)
    this.submitted = true;
    if (this.loginForm.invalid) {
     return;
      }
    
    //  this.router.navigate(['/','dashboard'])
      
     }
         
 }

