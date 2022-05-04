import { UserService } from './../../services/user.service';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  items: any;

  scrollableItems:any;

  activeItem: any;

  activeItem2: any;

  userInfo: any;
  
  constructor(private _UserService:UserService) { }

  ngOnInit(): void {

    this._UserService.getUserData().subscribe(
      response => {
        console.log(response);
      }, error => {
        console.table(error)
      }
    );
    
  }

  passwordForm = new FormGroup({

    current_password: new FormControl(null,),
    password: new FormControl(null,[Validators.required, Validators.minLength(6)]),
    password_confirmation: new FormControl(null,[Validators.required, Validators.minLength(6)]),
  });
  
  userInfoForm = new FormGroup({
    name:new FormControl(null,),
    email:new FormControl(null,),
    phone:new FormControl(null,)
  })

}
