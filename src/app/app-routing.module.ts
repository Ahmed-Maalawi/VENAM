import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ShopComponent } from "./components/shop/shop.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ItemDetailsComponent } from "./components/item-details/item-details.component";
import { WishListComponent } from "./components/wish-list/wish-list.component";
import { CartComponent } from "./components/cart/cart.component";
import { Home2Component } from "./components/home2/home2.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { CheckOutComponent } from "./components/check-out/check-out.component";
import { BlogDetailsComponent } from "./components/blog-details/blog-details.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home2', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home2', component: Home2Component },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NotAuthGuard] },
  { path: 'wishList', component: WishListComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: 'shop', component: ShopComponent, children:[] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'product-details/:id', component: ItemDetailsComponent },
  { path: 'blog-details', component: BlogDetailsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
