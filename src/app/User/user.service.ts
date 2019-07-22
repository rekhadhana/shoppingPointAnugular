// import { AppConstants } from './../shared/constants';
// import { AuthenticationService } from './../Auth/authentication.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

import {AuthenticationService} from '../Auth/authentication.service';
import {User} from '../shared/user'
import{ AppConstants} from '../shared/constants'

@Injectable({
  providedIn: 'root'
})
export class UserService {
//variable initialization
_baseURL:string;
//immutable set of http headers,with lazy parsing.
private _headers=new HttpHeaders().set('Content-Type','apllication/json');
  constructor(private htc:HttpClient,private authservice:AuthenticationService) {
    this._baseURL=AppConstants.baseURL;
   }
   //Get Users Details
   getUsers():Observable<User[]>{
     const headers=this._headers.append('Authorization:','Bearer'+this.authservice._token)
  
   //get users from Rest API
   return this.htc.get<User[]>(this._baseURL,{
     headers:headers
   });
  }
   
}
