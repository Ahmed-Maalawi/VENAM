// import { Customer } from './../../models/customer.model';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductDetailsService} from "../../services/product-details.service";
import {OwlOptions} from "ngx-owl-carousel-o";
import { WishListService } from '../../services/wish-list.service';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  providers: [MessageService]
})

export class ItemDetailsComponent implements OnInit {

  currentProduct:any;
  relatedProductsArr:any;
  images:any = [];
  imgPrefix:string = 'https://medicazone.online/';


  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductDetailsService:ProductDetailsService,
    private _Router:Router,
    private _WishListService:WishListService,
    private _MessageService:MessageService)
  {


  }

  
  
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 5
    },
    {
        breakpoint: '560px',
        numVisible: 2
    }
  ];


  ngOnInit() {

    window.scrollTo(0, 400);
    this.getProduct();

    // this.relatedProductsArr = this.getRelatedProducs();
    // console.table(this.relatedProducts);
  }

  getProduct(): void
  {
    let id = this._ActivatedRoute.snapshot.params['id'];

    this._ProductDetailsService.getProductDetails(id).subscribe(res => {
      this.currentProduct = res.data[0];
      console.log(this.currentProduct)
    });
  }

  // getRelatedProducs(): void
  // {
  //   console.log(this.currentProduct[6]);
  //   return this.currentProduct[6];
  // }

  // getImages() {
    
  //   this.currentProduct[1].forEach( (obj: any) => {
  //     this.images.push(obj.photo_name);

  //   });
  //   // console.log(this.images)
  // }

  // relatedProducts: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: false,
  //   mergeFit: true,
  //   margin: 10,
  //   autoplay: true,
  //   stagePadding: 0,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 4
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: false
  // }

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

  addToWishList(productID:any) 
  {
    this._WishListService.addProduct(productID)
    .subscribe(res => {
     if(res.success) {
        this.show('info', res.success)
      } else {
        this.show('error', res.errors)
      }
    },
    err => {
      this.show('error', err.error)
    }); 
  }
  
  refresh():void
  {    
    let currentUrl = this._Router.url;
    this._Router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._Router.onSameUrlNavigation = 'reload';
    this._Router.navigate([currentUrl]);
  }

  show(type: string,message: string): void
  {
    this._MessageService.add({severity:type, key: 'add-to-wishlist', summary:'WishList', detail: message});
  }

}

// if( == "Successfully Added On Your Wishlist") {
      
// } else if (res.success == "This Product has Already on Your Wishlist")
