import { Component, OnInit } from '@angular/core';
import { WishListService } from 'src/app/services/wish-list.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor(private _WishListService:WishListService) { }

  wishListProduct:any;

  imgPrefix: string = "http://medicazone.online/";
  
  ngOnInit(): void {

    window.scrollTo(0, 300);

    this.wishListProduct = this._WishListService.wishListProduct;
  }

  deleteProduct(item:any)
  {
    this._WishListService.delete(item);
  }

}
