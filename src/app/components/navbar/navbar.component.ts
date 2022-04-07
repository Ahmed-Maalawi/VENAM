import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService]
})

export class NavbarComponent implements OnInit {

  logoutMessage:string = '';

  constructor(private _AuthService:AuthService, private _Router:Router, private _MessageService:MessageService) { }

  
  ngOnInit(): void { }

  logoutClick(): void
  {
    localStorage.removeItem('userToken');
    this.showInfo('you are logedout');
    // console.log('test');

    // this._AuthService.logout().subscribe(response => {

    //   this.logoutMessage = response['message'];
    //   this.showInfo(this.logoutMessage);
    //   localStorage.setItem('userToken', null);

    // }, error => {

    //   console.log(error.error.message);
    //   this.showInfo(error.error.message);
    // });

  }

  checkIsLogin(): boolean
  {
    return this._AuthService.isLoggedIn();
  }

  showInfo(message:string): void
  {
    this._MessageService.add({severity:'info', summary: 'LogOut', detail: message, key: 'logoutMessage'});
  }

}
