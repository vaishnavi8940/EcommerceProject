import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: any;
  show: any;
  detail = new Array();
  quantity = 1;
  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    if (this.id != null) {
      this.api.get("/products/" + this.id).subscribe((result: any) => {
        this.show = result;
      })
    }
    this.detail = JSON.parse(localStorage.getItem("products") || "[]");
  }


  increment() {
    this.quantity++;
  }
  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addTocart() {
    let product = {
      id: this.show.id,
      name: this.show.name,
      mrp: this.show.mrp,
      price: this.show.price,
      quantity: this.quantity
    }
    let productAdded = false;
    if (localStorage.getItem("products") != null)
      this.detail = JSON.parse(localStorage.getItem("products") || "[]");

    for (let i = 0; i < this.detail.length; i++) {
      if (this.detail[i].id == product.id) {
        productAdded = true;
        break;
      }
    }
    if (!productAdded) {
      this.detail.push(product);
      localStorage.setItem("products", JSON.stringify(this.detail));
      this.toastr.success("Product Added To Cart", "Success",{
        positionClass:"toast-top-center",
        progressBar:true,
        timeOut:2000
      });
      this.api.updateCartValue(this.detail.length);
    }
    else{
      this.toastr.error("Product Already Added To Cart", "Error",{
        positionClass:"toast-top-center",
        progressBar:true,
        timeOut:2000
      });
    }
  }
}
