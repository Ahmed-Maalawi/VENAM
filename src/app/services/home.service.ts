import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient:HttpClient) { }


  getProduct(): Observable<any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/sliders');
  }

  getHotDeals(): Observable<any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/hotdeals')
  }
}

























