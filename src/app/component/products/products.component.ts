import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  result:any;
  category:any;

  constructor(private Api:ApiService ,private route:ActivatedRoute){
         this.category = this.route.snapshot.paramMap.get("category");
   }

    ngOnInit(): void {
      this.Api.get("products").subscribe((result:any)=>{
      this.result = result;
      
      if(this.category != null){
        this.result = result.filter((product:any)=>{
          if(product.category == this.category){
            return product;
          }
        })
      }
      })
    }

}
