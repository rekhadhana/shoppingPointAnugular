import { Component, OnInit,Input} from '@angular/core';
import{NgForm} from '@angular/forms';
import{Product} from '../products/product.model';
import{CartService} from '../shared/cart.service';
import{SizeServService} from '../shared/size-serv.service'
import{Params,ActivatedRoute,Router} from '@angular/router';
import {ProductSrvService} from '../products/product-srv.service';
import{Sizes} from '../shared/sizes.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  products:Product[];
  items:number;
  id:any;
  SubTotal:number=0;

selectedProductSize;
//For usint testing purpose
// prod:{name:string};

  @Input() product:Product[];
  @Input() index:number;
  updateM:any={};
  
  
  constructor(private cartService:CartService,private sizeService:SizeServService,
    private route:ActivatedRoute,private router:Router,private productService:ProductSrvService) { }

  ngOnInit() {
    // for UnitTEsting
    this.prod=this.cartService.Product;
//  sessionStorage.getItem("quentinTarantino");

// this.selectedProductSize=this.sizeService.getupdatedSizes();
    this.products=this.cartService.getProds();

    this.items=this.cartService.totalitems();
    for(let i=0;i<this.products.length;i++){
      if(this.products[i].amount>50){
       let tot= (this.products[i].amount-this.products[i].amount*0.50)*(this.products[i].qty)-((this.products[i].amount-this.products[i].amount*0.50)*0.50);
        this.SubTotal+=tot;
      }
      if(this.products[i].amount<=50){
        let tot= (this.products[i].amount-this.products[i].amount*0.25)*(this.products[i].qty)-((this.products[i].amount-this.products[i].amount*0.25)*0.25);
        this.SubTotal+=tot;
      }
    }
  

//retriving localstorage
// this.retrievedData=localStorage.getItem("quentinTarantino");
//  this.retrievedData[0];
  }
  onEdit(id:number){
    // console.log(id);
    // this.updateM=this.productService.getProduct(id);
    // console.log(this.updateM);
    
   this.productService.getSingleProduct(id).subscribe(
     result=>{
     this.updateM = result.data[0];
     console.log(this.updateM);
      });
 } 

 onSaveUpdate(){
  
   console.log(this.updateM);
   
   this.cartService.updateProduct(this.updateM.id,this.updateM);
  //  this.router.navigate(['/cart']);
   
   this.ngOnInit();
  }
  onDeleteRecipe(id){
    this.cartService.deleteProduct(this.id);
    this.router.navigate(['/Products']);
 
  } 

}


 
 
  



  
  
    
    
  


