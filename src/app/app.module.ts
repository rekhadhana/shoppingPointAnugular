import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';


import {ProductSrvService} from './products/product-srv.service';
import{CartService} from "./shared/cart.service";
import{SizeServService} from "./shared/size-serv.service";
import { RegisterComponent } from './register/register.component';
import { ReRegisterComponent } from './re-register/re-register.component';
// import{LoadingSpinnerComponent} from './shared/loading-spinner/loading-spinner.component.ts';
import{LoadingSpinnerComponent}from './shared/loading-spinner/loading-spinner.component';
import { UserComponent } from './User/user/user.component';
import { LoginComponent } from './User/login/login.component';

import { AuthenticationService } from './Auth/authentication.service';
import {UserService} from './User/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ShopingListComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductItemComponent,
    RegisterComponent,
    ReRegisterComponent,
    LoadingSpinnerComponent,
    UserComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductSrvService,CartService,SizeServService,AuthenticationService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
