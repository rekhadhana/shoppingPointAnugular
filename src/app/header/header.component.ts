import { Component, OnInit } from '@angular/core';
import{CartService} from '../shared/cart.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // items:number;
  
  constructor(private cartService:CartService) { }
  

  ngOnInit() {
   
  //  this.items=this.cartService.totalitems()
  }

}
