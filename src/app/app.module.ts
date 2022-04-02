import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ShopComponent } from './components/shop/shop.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { CartComponent } from './components/cart/cart.component';
import { TermsComponent } from './components/terms/terms.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {TabViewModule} from 'primeng/tabview';
import {GalleriaModule} from 'primeng/galleria';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Home2Component } from './components/home2/home2.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PasswordModule} from 'primeng/password';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from 'primeng/toast';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    ItemDetailsComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    ShopComponent,
    WishListComponent,
    CartComponent,
    TermsComponent,
    Home2Component,
    CheckOutComponent,
    BlogComponent,
    BlogDetailsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    TabViewModule,
    GalleriaModule,
    CarouselModule,
    ReactiveFormsModule,
    PasswordModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
