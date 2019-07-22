import{Sizes} from '../shared/sizes.model';

export class Product{
    public id:number;
    public pname:string;
    public style:string;
    public imagePath:string;
    
    public amount:number;
    
    public colour:string;
    public qty:number;
    public small:string;
    public large:string;
    public medium:string;
    public extralarge:string;
    public extrasmall:string;
    
 constructor(id:number,pname:string,style:string,
    imagePath:string,amount:number,colour:string,qty:number,small:string,large:string,medium:string,extralarge:string,extrasmall:string
){
     this.id=id;
     this.pname=pname;
     this.style=style;
     this.imagePath=imagePath;
     this.amount=amount;
     
     this.colour=colour;
     this.qty=qty;
     this.small=small;
     this.large=large;
     this.medium=medium;
     this.extralarge=extralarge;
     this.extrasmall=extrasmall;
 }
}