// import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import{ HttpClient ,HttpParams,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

// import { AppConstants } from './../shared/constants';
const apiURL = "http://127.0.0.1:3000/";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
//variable initialization
_token:any;
_baseURL:string;
  constructor(private htc:HttpClient) {
    //set token if saved in local storage
    var currentUser=JSON.parse(localStorage.getItem('currentUser'));
    this._token=currentUser && currentUser.token;
    this._baseURL=apiURL;

   }
   

  //  login(username: string, password: string):Observable<boolean>{
  //    return this.htc.post(this._baseURL+"/authenticate",
  // JSON.stringify({username:username,password:password})
  // .map((response:Response)=>{
  //            let token=response.json()&& response.json().token;?
  //            if(token){
  //              //set the token property for validate token in the app
  //              this._token=token;
  //              //store username and jwt token in local storage to keep user logged in between page refreshes
  //              localStorage.setItem('currentUser',JSON.stringigy({username:username,token:token}))
  //              //return tru to indicate successful login
  //              return true;
  //            }
  //            else{
  //              //return false to indicate failed login
  //              return false;
  //            }
  //          }));

  //  }

 
//   login(username:string,password:string):Observable<boolean>{
//     return this.htc.post(this._baseURL+'authenticat',JSON.stringify({username:username,password:password}).map((response:Response)=>{
//       let token=response.json();
//       if(token){
//         this._token=token;
//         localStorage.setItem('currentUser',JSON.stringify({username:username,token:token}));
//         return true;
//       }
//       else{
//         return false;
//       }
//     }));
//   }
//    logout():void{
//      //clear token remove  user from local storage to log user our.
//      this._token=null;
//      localStorage.removeItem('currentUser');

//    }
   
// }
