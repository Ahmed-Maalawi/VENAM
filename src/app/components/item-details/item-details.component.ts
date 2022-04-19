// import { Customer } from './../../models/customer.model';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductDetailsService} from "../../services/product-details.service";
import {OwlOptions} from "ngx-owl-carousel-o";
import { WishListService } from '../../services/wish-list.service';



@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  currentProduct:any;
  relatedProductsArr:any;
  imgPrefix:string = 'https://medicazone.online/';

  // @Output() value:string | any;
  // @Output() valueChange: new EventEmitter<any>();

  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductDetailsService:ProductDetailsService, private _Router:Router, private _WishListService:WishListService) {


  }

  images:any = [];

  responsiveOptions:any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '960px',
      numVisible: 4
    },
    {
      breakpoint: '768px',
      numVisible: 4
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];


  ngOnInit() {

    window.scrollTo(0, 400);

    let id = this._ActivatedRoute.snapshot.params['id'];

    this._ProductDetailsService.getProductDetails(id).subscribe(res => {
      this.currentProduct = res.data;
      this.getRelatedProducts();
      console.log(this.currentProduct);
    });
  }


  getRelatedProducts() {
    this.relatedProductsArr = this.currentProduct[6];
    this.currentProduct[1].forEach( (obj: any) => {
      this.images.push(obj.photo_name);

    });
    // console.log(this.images)
  }

  relatedProducts: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    mergeFit: true,
    margin: 10,
    autoplay: true,
    stagePadding: 0,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  change(id:number) {

    this._ActivatedRoute.snapshot.params['id'] = id;
    this.reloadCurrentRoute();
  }

  reloadCurrentRoute() {
    let currentUrl = this._Router.url;
    this._Router.navigateByUrl('/', {skipLocationChange: false}).then(() => {
      this._Router.navigate([currentUrl]);
    });
  }

  addToFav(product:any) 
  {
    this._WishListService.add(product);
  }
  
  refresh():void
  {    
    let currentUrl = this._Router.url;
    this._Router.routeReuseStrategy.shouldReuseRoute = () => false;
      this._Router.onSameUrlNavigation = 'reload';
      this._Router.navigate([currentUrl]);
  }

}
