import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient, private _AuthService:AuthService) { }

  getCartItems(): Observable <any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/get-cart-data');
  }

  addProduct(id: number): Observable <any>
  {
    let token = this._AuthService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
    
    return this._HttpClient.post(`https://medicazone.online/api/zone/add-to-cart/${id}`, {headers: headers});
  }

  removeItem(id: number): Observable <any>
  {
    return this._HttpClient.get(`https://medicazone.online/api/zone/cart-remove/${id}`);
  }
}
