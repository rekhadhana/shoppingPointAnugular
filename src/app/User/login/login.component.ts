// import { AppConstants } from './../../shared/constants';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import{NgForm} from '@angular/forms';
// import { AuthenticationService } from '.Auth/authentication.service';
import { AuthenticationService } from '../../Auth/authentication.service';
import { AppConstants } from '../../shared/constants';
import { User } from './../../shared/user';








@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //variable initialization
  loginForm:FormGroup;
  public usermodel:User=new User();
  public errorMsg="";

  constructor(private _fbuilder: FormBuilder,
    private route: Router,
    private _authService: AuthenticationService) {
      // this.loginForm = _fbuilder.group({
      //   username: ['', [Validators.required, Validators.email]],
      //   password: ['', Validators.required, Validators.minLength(6)]
      // });
  }

  //ngOnInit method for load data.
  ngOnInit() {
    //clear everything using logout.
    // this._authService.logout();   
  }

  //This method use for Login
  login(form:NgForm){
    alert('hi')
    const email=form.value.username;
    const pwd=form.value.password;
  
    if (form.valid) {
      if(email !== undefined && pwd !== null &&
        email!== undefined && pwd !== null){
          //Call Login service for validate username and password.
          // this._authService.login(email,pwd)
          //   .subscribe(result => {
          //     if (result === true) {
          //         // login successful
          //         this.route.navigate(["user"]);
          //     } else {
          //         // login failed
          //         this.errorMsg = 'Username or password is incorrect.';
          //     }
          // }); 
              
      }
    }
    else{
      this.errorMsg = 'login failed, Please try again!';
    }
  }
}
