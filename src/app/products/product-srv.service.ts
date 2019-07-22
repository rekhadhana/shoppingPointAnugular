import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Product } from './product.model';



const apiURL = "http://127.0.0.1:3000/";


@Injectable({
  providedIn: 'root'
})
export class ProductSrvService {
// productChanged=new Subject<Product[]>();

  constructor(private http: HttpClient) { }
products:Product[]=[];
// [new Product(1,
// "Solid Green cotton Tshirt",
// "ms13kt1906",
// "assets/T1.jpg",
//  50,
// "green",
//  5,
// "s",
//  "m",
//  "",
// "xl", "xs"
// ),new Product(
// 2,
// "pink rainbow print girls tee",
// "ms13kt1906",
// "assets/T2.jpg",
// 70,
// "pink",
// 4,
// "s",
// "m",
// "l",
// "xl",
// "xs"
// ),new Product(3,
//   "blue flower pattern shirt",
//   "ms13kt1906",
//   "assets/T3.jpg",
//    256,
//    "blue",
//    4,
//    "s",
//    "l",
//    "m",
//    "xl",
//    "xs"
//   ),new Product(4,
//     "check pattern tshirt",
//     "ms13kt1906",
//     "assets/T4.jpg",
//     100,
//     "red",
//     6,
//     "s",
//    "m",
//    "l",
//    "xl",
//    "xs")];

  //  getProduct(index:number):Observable<Product>{
  //   console.log("hi");
  //   return this.products[index];
    
  // }
  getProducts():Observable<any>{
    console.log("hi");
    return this.http.get(apiURL+'getAllProducts');
    // return this.products.slice();
  }
  
  getSingleProduct(id:number):Observable<any>{
    console.log("single");
    return this.http.get(apiURL+'getProduct/'+id);
  }
}

