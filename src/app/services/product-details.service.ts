import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private _HttpClient:HttpClient) { }

  getProductDetails(Product_id:number): Observable<any>
  {
    return this._HttpClient.get(`http://medicazone.online/api/zone/product-details/${Product_id}`);
  }
}
