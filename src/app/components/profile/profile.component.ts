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

    this.items = [
      {label: 'Profile', icon: 'pi pi-fw pi-home'},
      {label: 'Prfile Image', icon: 'pi pi-fw pi-calendar'},
      {label: 'Password', icon: 'pi pi-fw pi-pencil'},
      // {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      // {label: 'Settings', icon: 'pi pi-fw pi-cog'}
  ];
  }

  // this.scrollableItems = Array.from({ length: 50 }, (_, i) => ({ label: `Tab ${i + 1}`}));

  // this.activeItem = this.items[0];

  // this.activeItem2 = this.scrollableItems[0];

}
