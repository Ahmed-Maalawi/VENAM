import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser:any;

  constructor(private _HttpClient:HttpClient, private _AuthService:AuthService) { 

    
  }


  getwishList(): Observable<any>
  {

    let token = this._AuthService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });

    return this._HttpClient.get('http://medicazone.online/api/zone/get-wishlist-product', {headers: headers});
  }

  getUserData(): Observable <any>
  {
    let token = this._AuthService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });


    return this._HttpClient.get('https://medicazone.online/api/auth/user-profile', {headers: headers});
  }

  
}
