import { Component, OnInit } from '@angular/core';
import { HomeService } from "../../services/home.service";
import { OwlOptions } from "ngx-owl-carousel-o";
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {




  imgPrefix: string = "http://medicazone.online/";
  newArrivals: any[] = [];
  bestSeller: any[] = [];
  hotDeals: any = [];

  constructor(private _HomeService: HomeService) {
    this._HomeService.getProduct().subscribe((res) => {
      console.log(res);
    })

  }
  

  ngOnInit(): void {

    
    this._HomeService.getHotDeals().subscribe((response) => {
      this.hotDeals = response.data;
    })
  }

  getHotDeals() {
    this._HomeService.getHotDeals().subscribe((response) => {
      this.hotDeals= response.data;
      console.log(this.hotDeals);
    }, error => {

      console.log('test')
    });
  }
  testimonial: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplayTimeout: 50,
    autoplaySpeed: 30,
    navSpeed: 700,
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

  dealOfTheDay: OwlOptions = {
    loop: true,
    mouseDrag: true,
    rewind: true,
    autoplayHoverPause: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin: 10,
    center: true,
    stagePadding: 50,
    autoplayTimeout: 30,
    autoplaySpeed: true,
    navSpeed: 10,
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
        items: 3
      }
    },
    nav: false
  }

  
}
