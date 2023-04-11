import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router:Router){
    if(localStorage.getItem("usertype") == null){
      this.router.navigate(["/login"]);
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

}
