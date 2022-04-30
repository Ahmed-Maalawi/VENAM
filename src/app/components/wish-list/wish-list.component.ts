import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WishListService } from 'src/app/services/wish-list.service';
import {MessageService} from 'primeng/api';
import { Product } from '../../model/product';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  providers: [MessageService]
})
export class WishListComponent implements OnInit {
  
  imgPrefix: string = "http://medicazone.online/";
  wishListProduct:any;

  constructor(private _Router:Router, private _WishListService:WishListService, private _MessageService:MessageService) { }
  
  ngOnInit(): void {

    window.scrollTo(0, 300);
    this.getWishListFun();

  }
  getWishListFun(): void
  {
    this._WishListService.getwishList().subscribe(res => this.wishListProduct = res.data);
  }
  

  delete(itemID:any)
  {
    console.log(itemID);
    this._WishListService.deleteProduct(itemID)
    .subscribe(
      res => {
        if(res.message) {
          this.show('info', res.message);
          setTimeout(() => { this.getWishListFun()}, 2000)
          
        } else {
          this.show('error', res.errors)
        }
      }, error => {
      this.show('error', error.error);
      
    });
  }

  show(type: string,message: string): void
  {
    this._MessageService.add({severity:type, key: 'deleteMessage', summary:'WishList', detail: message});
  }

  reloadCurrentRoute() {
    let currentUrl = this._Router.url;
    this._Router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this._Router.navigate([currentUrl]);
    });
  }

  addToCart(ProductID: number): void 
  {

  }

}