import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../Constants';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  userInfo:any
  constructor(public router:Router) {
    this.userInfo = JSON.parse(localStorage.getItem(Constants.LOGIN_USER)!)
    if(!this.userInfo){
      this.router.navigate(['/'])

    }
   }

  ngOnInit(): void {
  }

}
