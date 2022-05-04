import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
// import {MegaMenuItem,MenuItem} from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any;
  cartError: any;
  imgPrefix: string = "http://medicazone.online/";
  // items: MegaMenuItem[];
  
  constructor(private _CartService:CartService,) { }

  ngOnInit(): void {
    this.getMyCart();
  }

  getMyCart(): any 
  {
    this._CartService.getCartItems()
    .subscribe(
      response => {
        this.cartItems = response.data;
        this._CartService.cartLength = this.cartItems.length;
      },
      error => {
        this.cartError = error.error;
      }
    )
  }

  delete(id: number): void
  {

  }

  add(id: number): void
  {

  }

}
