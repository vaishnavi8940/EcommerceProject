import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseurl = "https://6423e6b8d6152a4d4801d3c9.mockapi.io/api/v1/";

  get(path:string) {         // we also declare diff function name //
   return this.http.get(this.baseurl + path);
  }

  post(path:string ,data:any){                  //insert
   return this.http.post(this.baseurl + path ,data);
  }

  delete(path:string){
   return this.http.delete(this.baseurl + path);
  }
  put(path:string , data:any){                    //update
   return this.http.put(this.baseurl + path ,data);
  }

  private cartValue = new BehaviorSubject(0);
  currentCartValue = this.cartValue.asObservable();

  updateCartValue(count:number){
    this.cartValue.next(count);
  }
}
