import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@ViewChild('f') registerFom:NgForm;
defaultquestion="pet";
anwser="";
genders=['male','female'];
user={
  username:"",
  email:"",
  secreteQues:"",
  anwser:"",
  gender:""
}
submited=false;

  constructor() { }

  ngOnInit() {
  }
  // onsubmit(form:ElementRef){
  //   console.log('submited');
  // }
onSubmit(){
  console.log(this.registerFom);
  console.log(this.anwser);
  this.submited=true;
  this.user.username=this.registerFom.value.userData.uname;
  this.user.email=this.registerFom.value.userData.email;
  this.user.secreteQues=this.registerFom.value.secrete;
  this.user.anwser=this.registerFom.value.questionAnwser;
  this.user.gender=this.registerFom.value.gender;
  this.registerFom.reset();
 }
 suggestUserName(){
   const suggestedName="dhanalakshmi";
  //  this.registerFom.setValue({
  //    userData:{
  //     uname:suggestedName,
  //     email:''
  //    },
  //    secrete:'pet',
  //    questionAnwser:'',
  //    gender:'male'
  //  })
  this.registerFom.form.patchValue({//form wrapped by ngForm  
    userData:{
      uname:suggestedName
    }
  });

 }
}
