import { Component, OnInit } from '@angular/core';
import {ShopService} from "../../services/shop.service";
import {GetCategoryService} from "../../services/get-category.service";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private _ShopService:ShopService, private _GetCategoryService:GetCategoryService) { }

  imgPrefix: string = "https://medicazone.online/";
  allProducts:any;
  descountItems:any;
  sortOptions: any;
  sortOrder: number = 0;
  sortField: string = '';
  BaseCategory:any;
  categoryArr:any;
  

  ngOnInit(): void {
    this.getCategory();
    this.getProducts();
    this.desc();

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];

    // this._GetCategoryService.getCategory().subscribe(response => {
    //   this.BaseCategory = response.data.data;
    //   console.table(this.BaseCategory);
    // }, error => {

    //   console.table(error);
    // });
  }
  getProducts(): void
  {
    this._ShopService.getAllProducts().subscribe(respones => {
      this.allProducts = respones.data.data;
      // console.log(this.allProducts);
    });
  }
  onSortChange(event:any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  desc(): void
  {
    this._ShopService.getDescount().subscribe(
      response => { 
        this.descountItems = response.data.data.slice(0,5);
      },
      error => {
        console.log(error);
      }
    )
  }

  getCategory(): void
  {
    this._GetCategoryService.getCategory()
    .subscribe(
      response => {this.categoryArr = response.data},
      error => {console.log(error)}
    )
  }
}
