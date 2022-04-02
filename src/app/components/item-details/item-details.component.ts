import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor() { }
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
  }


}
