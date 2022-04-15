import { Component, OnInit } from '@angular/core';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import { HomeService } from "../../services/home.service";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css'],
  providers: [DialogService]
})
export class Home2Component implements OnInit {


  imgPrefix: string = "http://medicazone.online/";
  newArrivals: any[] = [];
  bestSeller: any[] = [];
  hotDeals: any[] = [];
  slider:any[]=[]

  constructor(private _HomeService: HomeService, private _DialogService:DialogService) {
    this._HomeService.getProduct().subscribe((res) => {
      // console.log(res);
    });

  }


  ngOnInit(): void {


    this._HomeService.getHotDeals().subscribe((response) => {
      
      this.hotDeals = response.data;
      this.bestSeller= response.data;

    });

    this._HomeService.getFeatured().subscribe((response)=> {

      this.newArrivals= response.data;

    });

    this._HomeService.slider().subscribe((response)=> {

      this.slider = response.data;

    });
  }

  // getHotDeals() {
  //   this._HomeService.getHotDeals().subscribe((response) => {
  //     this.hotDeals= response.data;
  //     console.log(this.hotDeals);
  //   }, error => {

  //     console.log('test')
  //   });
  // }


//   ref: any;


//   show(broduct:any) {
//     this.ref = this._DialogService.open(broduct, {
//         header: broduct.product_name_en,
//         width: '70%',
//         contentStyle: {"max-height": "500px", "overflow": "auto"},
//         baseZIndex: 10000
//     });

//     // this.ref.onClose.subscribe((product: Product) =>{
//     //     if (product) {
//     //         this.messageService.add({severity:'info', summary: 'Product Selected', detail: product.name});
//     //     }
//     // });
// }

// ngOnDestroy() {
//     if (this.ref) {
//         this.ref.close();
//     }
// }




  testimonial: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 800,
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
    autoplayTimeout: 10000,
    autoplaySpeed: 1000,
    autoplay: true,
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
