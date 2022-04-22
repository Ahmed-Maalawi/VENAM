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
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import { ContactComponent } from './components/contact/contact.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { ChipModule } from 'primeng/chip';
import { ProfileComponent } from './components/profile/profile.component';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import {AvatarModule} from 'primeng/avatar';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    ProfileComponent,
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
    ButtonModule,
    BrowserAnimationsModule,
    DataViewModule,
    DropdownModule,
    FormsModule,
    RatingModule,
    DynamicDialogModule,
    ChipModule,
    MenuModule,
    DialogModule,
    TabMenuModule,
    AvatarModule,
    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}