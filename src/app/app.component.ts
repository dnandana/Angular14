import { TemplateBindingParseResult } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  constructor(private router:Router){}
  title = 'studentDetails';
  studentDetails:any=[
    {id:1,name:"riaz",hindi:78,english:90,maths:91,mm:45,physics:54,social:82},
    {id:2,name:"abdul",hindi:65,english:87,maths:71,mm:87,physics:32,social:72},
    {id:3,name:"shan",hindi:74,english:97,maths:81,mm:77,physics:74,social:62},
    {id:4,name:"rahem",hindi:84,english:57,maths:91,mm:67,physics:45,social:52},
    {id:5,name:"ritu",hindi:94,english:67,maths:51,mm:57,physics:52,social:92},
    {id:6,name:"ramya",hindi:54,english:77,maths:61,mm:97,physics:66,social:52},
    {id:7,name:"lim",hindi:64,english:87,maths:71,mm:87,physics:55,social:62},
    {id:8,name:"abdul",hindi:74,english:97,maths:81,mm:77,physics:56,social:72},
    {id:9,name:"evan",hindi:84,english:57,maths:91,mm:67,physics:67,social:82},
    {id:10,name:"rocky",hindi:94,english:67,maths:51,mm:57,physics:74,social:92},
    {id:11,name:"rehan",hindi:54,english:77,maths:61,mm:97,physics:76,social:29},
    {id:12,name:"remo",hindi:64,english:87,maths:71,mm:87,physics:84,social:52},
    {id:13,name:"rahul",hindi:74,english:97,maths:81,mm:77,physics:86,social:62},
    {id:14,name:"nitin",hindi:84,english:57,maths:91,mm:67,physics:56,social:72},
    {id:15,name:"reva",hindi:94,english:67,maths:51,mm:57,physics:66,social:82},
    {id:16,name:"nvya",hindi:54,english:77,maths:61,mm:97,physics:76,social:92},
    {id:17,name:"ritu",hindi:64,english:87,maths:71,mm:87,physics:77,social:52},
    {id:18,name:"reman",hindi:74,english:87,maths:81,mm:77,physics:54,social:62},
    {id:19,name:"rikky",hindi:84,english:87,maths:71,mm:67,physics:63,social:72},
    {id:20,name:"nitu",hindi:94,english:97,maths:91,mm:57,physics:34,social:82},
    {id:21,name:"shiob",hindi:54,english:87,maths:51,mm:97,physics:23,social:92},
    {id:22,name:"sethu",hindi:64,english:97,maths:61,mm:87,physics:34,social:52},
    {id:23,name:"chan",hindi:74,english:57,maths:71,mm:77,physics:45,social:62},
    {id:24,name:"chau",hindi:84,english:67,maths:81,mm:67,physics:28,social:62},
    {id:25,name:"evan",hindi:95,english:77,maths:91,mm:57,physics:30,social:82},

    
  ];
  gotostudents(){
    
  }
  ngOnInit(){
    this.testResult();
  }
     studentDetails1:any =[];
      total_pass:number=0;
      testResult(){
      this.studentDetails.forEach((obj:any)=>{
      console.log(obj.name);
      let total=(obj.hindi+obj.english+obj.maths+obj.mm+obj.physics+obj.social);
      let Percentage=(total/600)*100;
      let studentgrade="";
      let pass_fail='P';
      let address="";
      let DOB="dd-mm-yy";
      let phone="";
      let city="";
      if(obj.hindi>=35 && obj.english>=35 && obj.maths>=35 && obj.mm>=35 && obj.physics>=35 && obj.social>=35){
        this.total_pass+=1;
        pass_fail='Pass';
       }else{
        pass_fail='Fail';
       }
      if(total<210){  
        studentgrade = "F";
      }else if(total>=210 && total<=360){
        studentgrade=  "D";  
      }else if(total>=360 && total<=450){
        studentgrade = "C";
      }else if(total>=450 && total<=590){
        studentgrade = "B";
      }else if(total>590){
        studentgrade = "A";
      }
      let stuObject={id:obj.id,name:obj.name,hindi:obj.hindi,english:obj.english,maths:obj.maths,mm:obj.mm,physics:obj.physics,social:obj.social,total:total,pass_fail:pass_fail,per:Percentage,studentgrade:studentgrade,address:address,dob:DOB,phone:phone,city:city}

      this.studentDetails1.push(stuObject);        
    });
  }


};

