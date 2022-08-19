import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { ConfirmPasswordValidator} from '../confirm-password.validator';
import { RegisterServicesService } from '../register-services.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})

export class RegisterComponentComponent implements OnInit {
    registerForm:any= FormGroup;
    submitted:boolean=false;
    

    constructor(
      private formBuilder: FormBuilder,
      private router:Router,  
      private registerServicesService : RegisterServicesService
      
    ) { }
  
   
  ngOnInit() {
   this.registerForm = this.formBuilder.group({
      name:['',Validators.required,Validators.minLength(4)],
      UserName:['',[Validators.required,Validators.minLength(4)]],
      password:['',Validators.required,,Validators.minLength(8),Validators.maxLength(12)],
      confrimPassword:['',Validators.required,Validators.minLength(8),Validators.maxLength(12)],
      DOB:['',Validators.required,Validators.minLength(8),Validators.maxLength(12)],
      mobile:['',Validators.required,Validators.maxLength(10)],
      address:['',Validators.required,Validators.maxLength(10)],
      pin:['',Validators.required,Validators.maxLength(6)]
      },
      {
        Validators: ConfirmPasswordValidator("password","confirmPassword")
      }
      );
    }
  get f(){return this.registerForm.controls}
  
  onSubmit(){
      console.log(this.registerForm)
      this.submitted=true;
      if(this.registerForm.invalid){
      return;
       }
   this.router.navigate(['/','registerForm']);

  }
}
