import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetCategoryService {

  constructor(private _HttpClient: HttpClient) {}

  getCategory(): Observable<any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/');
  }
}
