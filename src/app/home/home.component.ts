import { Component, OnInit } from '@angular/core';
import { Constants } from '../Constants';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInfo:any
  constructor(public service:CustomerService) {
    this.userInfo = localStorage.getItem(Constants.LOGIN_USER)
   }

  ngOnInit(): void {
    this.service.getMessage().subscribe(res=>{
    this.userInfo = localStorage.getItem(Constants.LOGIN_USER)

    })
  }

}
