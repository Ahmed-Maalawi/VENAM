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

  getHeader(): any 
  {
    let token = this._AuthService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });

    return headers;
  }

  getUserData(): Observable <any>
  {
    return this._HttpClient.get('https://medicazone.online/api/auth/user-profile', {headers: this.getHeader()})
  }

  shangePassword(): Observable <any>
  {
    return this._HttpClient.post('https://medicazone.online/api/auth/updatePassword', {headers: this.getHeader()})
  }

  updateInfo(): Observable <any>
  {
    return this._HttpClient.post('http://medicazone.online/api/auth/user/store', {headers: this.getHeader()})
  }


  
}
