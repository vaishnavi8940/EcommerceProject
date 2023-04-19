import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  counter = 0;
  constructor(private api:ApiService) { }

ngOnInit(): void {
  this.api.currentCartValue.subscribe((count)=>{
    this.counter = count;
   })

  if(localStorage.getItem("products") != null)
  {
    let products = JSON.parse(localStorage.getItem("products") || '[]');
    this.api.updateCartValue(products.length);
  }
}

}
