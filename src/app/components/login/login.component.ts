import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {MessageService} from "primeng/api";
// import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})

export class LoginComponent implements OnInit {
  
  value3: string = '';
  token:string = '';
  loginError:any;
  loginFailed:string = '';

  constructor(
    private _Router:Router,
    private _AuthService:AuthService,
    private _MessageService: MessageService
  )
  { }


  ngOnInit(): void {}


  // -------------  login form  -------------
  loginForm = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),

  });

  // ----------- submit login form --------------
  loginSubmit(formData:FormGroup)
  {

    this._AuthService.login(formData.value).subscribe(response => {
     
      this._AuthService.saveUser(response.access_token);
      this._AuthService.getUserData().subscribe(response => {

        this._AuthService.currentUser = response;
        this.showSuccess('You Are Login Successfully', `Hi....${this._AuthService.currentUser.name}`, 'success');
        setTimeout(()=> {this._Router.navigate(['/home2'])}, 3000);
      
      });

    }, error => {

      this.loginFailed = error['error']['error'];
      this.showSuccess(this.loginFailed, 'Waring', 'error');

    });

  //   this.loginError = '';

  }

  showSuccess(message:string, summary:string, status:string)
  {
    this._MessageService.add({key:'loginMessage' ,severity:status, summary: summary, detail: message});
  }
}
