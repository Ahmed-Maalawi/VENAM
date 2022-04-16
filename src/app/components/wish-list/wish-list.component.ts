import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor(private _UserService:UserService) { }

  wishListProduct:any;

  imgPrefix: string = "http://medicazone.online/";
  
  ngOnInit(): void {

    window.scrollTo(0, 300);

    this._UserService.getwishList().subscribe( response => {

      this.wishListProduct = response['data'];
      console.log(this.wishListProduct);

    });
  }

}
