import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient:HttpClient) { }


  slider(): Observable<any>
  {
    return this._HttpClient.get('http://medicazone.online/api/zone/sliders')
  }
  getProduct(): Observable<any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/sliders');
  }

  getHotDeals(): Observable<any>
  {
    return this._HttpClient.get('http://medicazone.online/api/zone/hotdeals');
  }
  

  // get featured
  // ------------------
  getFeatured(): Observable <any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/featured');
  }

  getCategory(): Observable <any>
  {

    return this._HttpClient.get('https://medicazone.online/api/zone/subsubcategory/product/8/sneakers-man')
  }


}

























