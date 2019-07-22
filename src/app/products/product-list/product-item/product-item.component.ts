import { Component, OnInit,Input } from '@angular/core';
import{Router} from '@angular/router';
import {ProductSrvService} from '../../product-srv.service';
import{Product}from '../../product.model';
import{CartService} from "../../../shared/cart.service";



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 @Input() product:Product;
   @Input() index:number;
   qty:number=1;
//  shopProduct:Product[]=[];
 
  // subscription:Subscription;
  constructor(private cartService:CartService,private router:Router) { }

  // addProductsToCart(){
  //  sessionStorage.setItem("quentinTarantino",JSON.stringify(this.product));
  //  this.router.navigate(['edit']);
  // }
  
   
 
   
  ngOnInit() {
   
  }
  

  addProductsToCart(){
    if(confirm('do you want to add this to cart')){
      if(true){
        this.router.navigate(['ToCart']);
      return  this.cartService.addProduct(this.product);
        
      }
      else{
        return null;
      }
      
    }

  }
 

}
