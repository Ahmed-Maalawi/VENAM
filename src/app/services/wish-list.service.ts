import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  wishListProduct = [];

  constructor(private _UserService:UserService) {

    this._UserService.getwishList().subscribe( response => {

      this.wishListProduct = response['data'];
      
      console.log(this.wishListProduct);
    });

  }

  delete(item:any):void
  {
    // this.wishListProduct.pop(item);
  }

  add(item:any):void
  {
    // this.wishListProduct.push(item);
    console.log(this.wishListProduct);
  }
}
