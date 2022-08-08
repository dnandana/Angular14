import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  login: any = [
    {id:1,username:"nikky",password:"1234",conformpassword:"1234"},
  ]
}
