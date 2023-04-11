import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  formdata:any;
  id:any;

  constructor(private Api:ApiService , private router:Router, private route:ActivatedRoute) {
            this.id = this.route.snapshot.paramMap.get("id");
 }

 ngOnInit(): void {
      this.formdata = new FormGroup({
       name: new FormControl("", Validators.compose([Validators.required])),
       description: new FormControl("", Validators.compose([Validators.required])),
       mrp: new FormControl("", Validators.compose([Validators.required])),
       price: new FormControl("", Validators.compose([Validators.required])),
       img: new FormControl("", Validators.compose([Validators.required])),
       isactive :new FormControl(false, Validators.compose([Validators.required])),
       category : new FormControl("",Validators.compose([Validators.required])),

      })



      if(this.id != null){
       this.Api.get("/products/" +this.id).subscribe((result:any)=>{
          //console.log(result);
         this.formdata.patchValue({
           name:result.name,
           description:result.description,
           mrp:result.mrp,
           price:result.price,
           img:result.img,
           category:result.category,
           isactive:result.isactive
         })

       })
      }

 }

 save(data:any){

   console.log(data);


   if(this.id == null){
     this.Api.post("products", data).subscribe((result:any)=>{
       //console.log(result);
         this.router.navigate(['/admin/products']);

     })
 }
 else{
       this.Api.put("products/" + this.id , data).subscribe((result:any)=>{
         //console.log(result);
           this.router.navigate(['/admin/products']);

       })


 }

}


}
