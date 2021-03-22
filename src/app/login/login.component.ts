import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../Constants';
import { Subject } from 'rxjs';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usersDB = [ 
    {userid : "abc@media.com",password:"abc123",username:"tom"}, 
    {userid : "def@media.com",password:"def123",username:"dick"}
  ]
  email:any;
  password:any;
  errorMsg:any;
  subject = new Subject<any>();

  constructor(public router:Router,public service:CustomerService) { }

  ngOnInit(): void {
  }
  submitClick(){
   
    var email = /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4}[\W]*,{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4})[\W]*$/;
        if (!email.test(this.email)){
         this.errorMsg = "Please Enter Valid E-Mail"

          setTimeout(() => {
         this.errorMsg = ""
          }, 3000);
         return ;
        }
       
    for(let data of this.usersDB){
      if(data.password == this.password && data.userid == this.email){
        localStorage.setItem(Constants.LOGIN_USER,JSON.stringify(data))
      
          this.service.sendMessage(data)
        this.router.navigate(['/'])
      }else{
        this.errorMsg = "Please enter correct Email & Password"
        setTimeout(() => {
          this.errorMsg = ""
           }, 3000);
      }
    }
  }
}
