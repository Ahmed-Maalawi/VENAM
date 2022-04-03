import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  // private _AuthService:AuthService
  constructor(
    private _Router:Router,
    private _AuthService:AuthService,
    private _MessageService: MessageService
  ) { }

  ngOnInit(): void {
  }
  value3: string = '';
  token:string = '';
  loginError:any;
  loginFailed:string = '';

  loginForm = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),

  });

  loginSubmit(formData:FormGroup){

    this._AuthService.login(formData.value).subscribe(response => {
      if (response.message == 'success') {
        this._AuthService.saveUser(response.access_token);
        this._AuthService.getUserData().subscribe(response => {

          this._AuthService.currentUser = response;
          console.table(this._AuthService.currentUser)
          // this._Router.navigate(['/home2']);
          this.showSuccess('you are login successfully');
        });
      } else {
        this.loginError = response.error;
        console.log(this.loginError);
      }
      //  end login statement
    }, error => {

      this.loginFailed = error.error.error;
      console.log(this.loginFailed);
    });

  //   this.loginError = '';

  }

  showSuccess(message:string) {
    this._MessageService.add({key:'loginMessage' ,severity:'success', summary: 'Success', detail: message});
  }
}
