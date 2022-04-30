import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private _AuthService:AuthService, private _HttpClient:HttpClient) {}

  getwishList(): Observable<any>
  {

    let token = this._AuthService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });

    return this._HttpClient.get('https://medicazone.online/api/zone/get-wishlist-product', {headers: headers});
  }

  addProduct(id: number): Observable<any>
  {
    let token = this._AuthService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });

    return this._HttpClient.post(`https://medicazone.online/api/zone/add-to-wishlist/${id}`, {headers: headers});
  }

  deleteProduct(id: number): Observable <any>
  {
    let token = this._AuthService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
      
    return this._HttpClient.get(`https://medicazone.online/api/zone/wishlist-remove/${id}`, {headers: headers});
  }
}

