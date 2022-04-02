import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // private _AuthService:AuthService, private _Router:Router
  constructor() { }

  ngOnInit(): void {
  }
  token:string = '';
  registerErrors:any;
  registerForm = new FormGroup({

    name: new FormControl(null, [Validators.minLength(2), Validators.maxLength(100), Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    password_confirmation: new FormControl(null, [Validators.required, Validators.minLength(6)])

  });


  registerSubmit(formData:FormGroup) {

    // this._AuthService.register(formData.value).subscribe(response => {
    //
    //   if (response.message == 'success') {
    //     this.token = response.access_token;
    //     this._AuthService.saveUser(this.token);
    //     this._AuthService.getUserData().subscribe(response => {
    //
    //       this._AuthService.currentUser = response;
    //       console.log(this._AuthService.currentUser);
    //       this._Router.navigate(['/home']);
    //
    //     }, error => {
    //
    //       console.log('get userData error');
    //
    //     });
    //   }
    // }, err => {
    //   this.registerErrors = err.error.error;
    //   // console.log(this.registerErrors)
    // });
  }
}
