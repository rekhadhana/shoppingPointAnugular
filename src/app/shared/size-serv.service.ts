import { Injectable } from '@angular/core';
import{Sizes} from '../shared/sizes.model';



@Injectable({
  providedIn: 'root'
})
export class SizeServService {
  sizes=[new Sizes('s','m','l','xl','xs')];
  

  constructor() { }
  addSizes(size){
    this.sizes.push(size);
  }
  getupdatedSizes(){
    return this.sizes.slice();
  }
  updateSize(size:Sizes){
    this.sizes.push(size);
       // this.slproducts[index]=newProduct;
     //  this.productChanged.next(this.slproducts.slice());
      
     }
   
}


