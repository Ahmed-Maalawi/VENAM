import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService:AuthService) { }



  
  ngOnInit(): void { }

  logoutClick() {
    this._AuthService.logout(); //log out.
  }



}
