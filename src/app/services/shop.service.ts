import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProducts(): Observable<any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/getProducts');
  }

  getDescount(): Observable <any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/discount');
  }
}
