import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {

    
  }

  

}
