import { Injectable } from '@angular/core';
import{Product}from '../products/product.model';
import{Observable,Subject}from 'rxjs';
import{Sizes} from '../shared/sizes.model';




@Injectable({
  providedIn: 'root'
})
export class CartService {
  productChanged=new Subject<Product>();
  // slproducts=[
  //   1,
  //   "cotton tshirt",
  //   "asseets/p1.jpg",
  //   "ms13kt1906",
  //   "blue",
  //   "small"
      
  //   ];
    slproducts=[
      // new Product(1,
      // "cotton tshirt",
      // "ms13kt1906",
      // "green",
      // "assets/p1.jpg",
      // 50,['s','m','xl','xs','l']),new Product(2,'print girls tee','ms13kt1906','pink','assets/p2.jpg',60,['s','xs','xl','l','m'])
  ];
 
//For Unit Testing Purpose
// prod={name:"soap"};
  constructor() { }
  getTotal(){
    let total = 0;
    for (var i = 0; i < this.slproducts.length; i++) {
        // if (this.slproducts[i].amount) {
          total =total+this.slproducts[i].amount;
        // }
    }
    return total;
}
totalitems(){
    return this.slproducts.length;

   }

// getproduct(){
//   }


  getProduct(index:number):Observable<Product>{
    console.log("hi");
    return this.slproducts[index];
    
  }

  getProds(){
    return this.slproducts.slice();
  }
  updateProduct(index:number,newProduct:Product){
   this.slproducts.splice(index,1);
    // this.slproducts.push(newProduct);    
  this.slproducts[index]=newProduct;
  // this.slproducts[index];
  
    //  this.productChanged.next(this.slproducts.slice());
  
     
    }
    
  
    addProduct(product:Product){
    
      this.slproducts.push(product);
      console.log(this.slproducts);
      this.productChanged.next(this.slproducts.slice());
    }
     deleteProduct(index:number){
       this.slproducts.splice(index,1);
    //   //emit copy of updated one
      // this.productChanged.next(this.slproducts.slice());
     }
  }

