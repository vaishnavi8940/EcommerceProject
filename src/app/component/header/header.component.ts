import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  count = 0;

ngOnInit(): void {
  if(localStorage.getItem("products") != null)
  {
    let products = JSON.parse(localStorage.getItem("products") || '[]');
    this.count = products.length;
  }
}
cart = 0;

}
