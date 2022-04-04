import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService]
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _MessageService: MessageService) { }



  
  ngOnInit(): void { }

  logoutClick() {
    this._AuthService.logout(); //log out.
  }

  showSuccess() {
    this._MessageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
  }

}
