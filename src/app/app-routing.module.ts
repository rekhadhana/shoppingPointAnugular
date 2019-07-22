import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';

import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './User/user/user.component';
import { LoginComponent } from './User/login/login.component';




const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'

  },
  {
    path:'register',component:RegisterComponent
  },
  { path:'Products', component:ProductsComponent },
  {path:'cart',component:ShopingListComponent},
  { path:'ToCart',redirectTo:'/cart'},
  {
    path:'user',component:UserComponent
  },{
    path:'login',component:LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
