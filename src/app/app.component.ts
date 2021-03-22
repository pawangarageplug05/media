import { Component } from '@angular/core';
import { Constants } from './Constants';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'media';
 subject = new Subject<number>();

  userInfo:any
  constructor(public router:Router,public service:CustomerService){
    
    
 this.getLocalStorage()
    this.userInfo = JSON.parse(localStorage.getItem(Constants.LOGIN_USER)!)
  }
  logOut(){
    localStorage.removeItem(Constants.LOGIN_USER)
    this.userInfo = JSON.parse(localStorage.getItem(Constants.LOGIN_USER)!)
    this.router.navigate(['/'])
    this.service.sendMessage(this.userInfo)

  }
  getLocalStorage(){
   this.service.getMessage().subscribe(message => {
    this.userInfo = JSON.parse(localStorage.getItem(Constants.LOGIN_USER)!)
    });
  }
}
