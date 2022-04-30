import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any;
  cartError: any;
  imgPrefix: string = "http://medicazone.online/";
  
  constructor(private _CartService:CartService) { }

  ngOnInit(): void {
    this.getMyCart();
  }

  getMyCart(): any 
  {
    this._CartService.getCartItems()
    .subscribe(
      response => {
        this.cartItems = response.data;
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
