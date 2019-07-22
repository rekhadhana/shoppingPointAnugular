import { Component, OnInit } from '@angular/core';
import{Product}from './product.model';
import {ProductSrvService} from './product-srv.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[];
  isLoading=false;

  // subscription:Subscription;
  constructor(private productService:ProductSrvService) { }

  ngOnInit() {
    this.isLoading=true;
   this.productService.getProducts().subscribe(products=>{
     this.products=products.data;
     this.isLoading=false;
   },
   error=>{console.log(error)
  this.isLoading=false}
  )
  }



  
}
