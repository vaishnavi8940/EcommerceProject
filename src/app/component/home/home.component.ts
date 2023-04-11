import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result:any;
  category:any;
  constructor(private Api:ApiService, private router:Router, private route:ActivatedRoute){
         this.category = this.route.snapshot.paramMap.get("category");
  }
  ngOnInit(): void {
    this.Api.get("products").subscribe((result:any)=>{
    this.result = result;
    })
  }
}
