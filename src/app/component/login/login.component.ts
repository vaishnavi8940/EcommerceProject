import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata:any;
  result:any;

  constructor(private router:Router , private api:ApiService){}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username : new FormControl("", Validators.compose([Validators.required])),
      password : new FormControl("",Validators.compose([Validators.required]))
    })


  }


  login(data:any){

    //console.log(data);
    if(data.username=="admin" && data.password=="admin"){
      // alert("Enter Successfully");
      localStorage.setItem("usertype", "admin");
      this.router.navigate(["/admin"]);
    }
    else{
      alert("Invalid Details");
    }

    }



}
