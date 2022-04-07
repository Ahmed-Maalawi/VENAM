import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Router:Router) {}

  currentUser: any;
  register(Data: any):Observable <any>
  {
    return this._HttpClient.post('https://medicazone.online/api/auth/register', Data);
  }

  login(Data: any):Observable <any>
  {
    return this._HttpClient.post('https://medicazone.online/api/auth/login', Data);
  }

  getUserData():Observable <any>
  {
    let token = this.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });

    return this._HttpClient.get('https://medicazone.online/api/auth/user-profile', {headers: headers});
  }

  saveUser(userToken:string){
    localStorage.setItem('userToken', userToken);
  }

  getToken() {
    return localStorage.getItem('userToken');
  }

  slider():Observable<any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/sliders')
  };



  isLoggedIn():boolean
  {
    return (localStorage.getItem('userToken') != null? true : false);
  }

  logout():void
  {
    localStorage.removeItem('userToken');
    
    this._Router.navigate(['/home']);
  }
}
