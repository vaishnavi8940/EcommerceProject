import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  // constructor(private router:Router){
  //   if(localStorage.getItem("usertype") == null){
  //     this.router.navigate(["/"]);
  //   }
  // }

  // logout(){
  //   localStorage.clear();
  //   this.router.navigate(["/"]);
  // }
    result: any;

      constructor(private Api:ApiService){ }

      ngOnInit(): void {
         this.load();
    }

    load(){
      this.Api.get("products").subscribe((result:any)=>{
        this.result = result;
      })
    }

    delete(id:number){
     // alert(id)
     if(confirm("Are You Sure..?")){
      this.Api.delete("products/" +id).subscribe((result:any)=>{
        this.load();
      })
     }
    }


  }
