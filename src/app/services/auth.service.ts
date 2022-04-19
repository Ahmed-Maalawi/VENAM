import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static isLoggedIn() {
    throw new Error('Method not implemented.');
  }

  constructor(private _HttpClient:HttpClient, private _Router:Router) {}

  currentUser: any;
  
  register(Data: any): Observable <any>
  {
    return this._HttpClient.post('https://medicazone.online/api/auth/register', Data);
  }

  login(Data: any): Observable <any>
  {
    return this._HttpClient.post('https://medicazone.online/api/auth/login', Data);
  }

  // getUserData(): Observable <any>
  // {
  //   let token = this.getToken();

  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`,
  //   });


  //   return this._HttpClient.get('https://medicazone.online/api/auth/user-profile', {headers: headers});
  // }

  saveUser(userToken:string): void
  {
    localStorage.setItem('userToken', userToken);
  }

  getToken(): any 
  {
    return localStorage.getItem('userToken');
  }

  slider(): Observable <any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/sliders');
  }

  isLoggedIn():boolean
  {
    // console.log(localStorage.getItem('userToken'));
    return (localStorage.getItem('userToken') == null|| localStorage.getItem('userToken') == ' '? false : true);
  }

  logout(): Observable <any>
  {
    let token = this.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
    console.log(headers);

    return this._HttpClient.post('http://medicazone.online/api/auth/logout', {headers: headers});
  }

}