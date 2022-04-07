import { Component, Input, OnInit, Output } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductDetailsService} from "../../services/product-details.service";
import {OwlOptions} from "ngx-owl-carousel-o";

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

  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductDetailsService:ProductDetailsService) {


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
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];


  ngOnInit() {

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
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
}
