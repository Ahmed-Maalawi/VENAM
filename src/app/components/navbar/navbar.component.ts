import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { country } from 'src/app/model/country';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from "../../services/auth.service";
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from 'src/app/services/home.service';
import { CartService } from 'src/app/services/cart.service';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService]
})



export class NavbarComponent implements OnInit {

  logoutMessage: string = '';
  currentUser: any;
  selectedCountry: country = { name: 'ar', code: 'EG', img: 'eg.svg', value: 'ar' };
  cartLength: number = 0;
  cities: country[];

  filteredCat:any[]=[];
  category: any[] = [];
  subCategory: any[] = [];
  subSubCategory: any[] = [];
  constructor(private _AuthService: AuthService, private _MessageService: MessageService, private _TranslateService: TranslateService, private _HomeService: HomeService, private _CartService: CartService) {

    this.cities = [
      { name: 'ar', code: 'EG', img: 'eg.svg', value: 'ar' },
      { name: 'en', code: 'US', img: 'us.svg', value: 'en' }
    ];
    // this.currentUser = this._AuthService.currentUser;
    // console.log(this.currentUser);

  }



  ngOnInit(): void {

    // console.log(this.currentUser);



    /*=============================================
      =    	   Toggle Active  	         =
    =============================================*/
    $('.cat-toggle').on('click', function () {
      $('.category-menu').slideToggle(500);
      return false;
    });



    $('.more_slide_open').slideUp();
    $('.more_categories').on('click', () => {
      $(this).toggleClass('show');
      $('.more_slide_open').slideToggle();
    });

    /*=============================================
      =    		Mobile Menu			      =
    =============================================*/
    //SubMenu Dropdown Toggle
    if ($('.menu-area li.dropdown ul').length) {
      $('.menu-area .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

    }

    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {

      var mobileMenuContent = $('.menu-area .main-menu').html();
      $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

      //Dropdown Button
      $('.mobile-menu li.dropdown .dropdown-btn').on('click', () => {
        $(this).toggleClass('open');
        $(this).prev('ul').slideToggle(500);
      });
      //Menu Toggle Btn
      $('.mobile-nav-toggler').on('click', function () {
        $('body').addClass('mobile-menu-visible');
      });

      //Menu Toggle Btn
      $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
        $('body').removeClass('mobile-menu-visible');

      });
    }

  
    this._HomeService.category().subscribe((response) => {
      this.category = response.data
    
    })

    // this._HomeService.subCategory().subscribe((response)=>
    // {
    //   this.subCategory=response.data
    // })


    this.cartLength = this._CartService.cartLength;
    
  }

  logoutClick(): void {
    localStorage.removeItem('userToken');
    this.showInfo('you are logedout');
    // console.log('test');

    // this._AuthService.logout().subscribe(response => {

    //   this.logoutMessage = response['message'];
    //   this.showInfo(this.logoutMessage);
    //   localStorage.setItem('userToken', null);

    // }, error => {

    //   console.log(error.error.message);
    //   this.showInfo(error.error.message);
    // });

  }

  checkIsLogin(): boolean {
    return this._AuthService.isLoggedIn();
  }

  showInfo(message: string): void {
    this._MessageService.add({ severity: 'info', summary: 'LogOut', detail: message, key: 'logoutMessage' });
  }

  translateLanguageTo(lang: string) {
    this._TranslateService.use(lang);
    console.log(lang);
  }



  displayModal: boolean = false;

  showModalDialog() {
    this.displayModal = true;
  }
  
}
