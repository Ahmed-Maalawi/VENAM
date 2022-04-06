import { Component, OnInit } from '@angular/core';
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
  imgPrefix:string = 'https://medicazone.online/';

  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductDetailsService:ProductDetailsService) {


  }
  // images:any;

  images:any = [
    "assets/img/product/sd_bottom01.jpg",
    "assets/img/product/sd_bottom02.jpg",
    "assets/img/product/sd_bottom03.jpg",
    "assets/img/product/sd_bottom04.jpg",
    "assets/img/product/sd_bottom03.jpg"
  ]
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

  // constructor() { }

  ngOnInit() {
    // this.photoService.getImages().then(images =>{
    //   this.images = images
    // })


    let id = this._ActivatedRoute.snapshot.params['id'];

    this._ProductDetailsService.getProductDetails(id).subscribe(res => {
      this.currentProduct = res.data;
      console.table(this.currentProduct);
    });
  }


  customOptions: OwlOptions = {
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
