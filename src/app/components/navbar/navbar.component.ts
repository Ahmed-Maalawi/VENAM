import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { country } from 'src/app/model/country';
import { UserService } from 'src/app/services/user.service';
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService]
})



export class NavbarComponent implements OnInit {

  logoutMessage:string = '';
  currentUser:any;
  selectedCountry:country =  {name: 'Egypt', code: 'EG', img:'eg.svg'};

  cities: country[];
  constructor(private _AuthService:AuthService, private _MessageService:MessageService) {

    this.cities = [
      {name: 'EG', code: 'EG', img:'eg.svg'},
      {name: 'US', code: 'US', img:'us.svg'}
    ];
    // this.currentUser = this._AuthService.currentUser;
    // console.log(this.currentUser);
    
  }

  

  ngOnInit(): void { 

    // console.log(this.currentUser);
    
  }

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
