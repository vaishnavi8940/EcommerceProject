import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { LandingComponent } from './landing/landing.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:"", component:LandingComponent, children:[
    {path:"" , component:ProductsComponent},
    {path:"products" , component:ProductsComponent},
    {path:"product", component:ProductComponent},
    {path:"product/:id", component:ProductComponent},
    {path:"orders", component:OrdersComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
