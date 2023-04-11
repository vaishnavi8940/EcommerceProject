import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any;
  array = new Array();
  total = 0;



  constructor() { }

    ngOnInit(): void {
     this.products = JSON.parse(localStorage.getItem("products") || '[]');
     this.calculateTotal();
    }

    calculateTotal(){
      this.total = 0;
      this.products.map((product:any)=>{
        this.total += product.quantity * product.price;
      });

    }

    cancleCart(product:any){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result:any) => {
        if (result.isConfirmed) {
          this.products = this.products.filter((p:any)=>{
            if(product.id != p.id){
              return p;
            }
          })
          localStorage.setItem("products", JSON.stringify(this.products));
          this.calculateTotal();
        }
      })


    }


 keypressed(event:any){
   if (event.keyCode == 45) {
     return false;
   }
   else {
     return true;
   }
 }

 quantityChanged(){
  localStorage.setItem("products", JSON.stringify(this.products));
  this.calculateTotal();
 }

}
