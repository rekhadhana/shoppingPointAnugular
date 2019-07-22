import { Component, OnInit ,DoCheck} from '@angular/core';
import{FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import{Observable} from 'rxjs';

@Component({
  selector: 'app-re-register',
  templateUrl: './re-register.component.html',
  styleUrls: ['./re-register.component.css']
})
export class ReRegisterComponent implements OnInit,DoCheck {
 registerForm:FormGroup;
 genders=['male','female'];
 forbiddenUnames=['suma','rani'];
  constructor() { }
  ngDoCheck(){
    console.log('do check');
  }


  ngOnInit() {
    console.log('ng onInit called');
    this.registerForm=new FormGroup({
      'userData':new FormGroup({
        'uname':new FormControl(null,[Validators.required,Validators.minLength(2),this.forbiddenNames.bind(this)]),
        'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
  
      }),
        'gender':new FormControl('female',[Validators.required]),
        'hobbies':new FormArray([])
    });

  }
  onSubmit(){
    console.log(this.registerForm);
    this.registerForm.reset();
  }
  addHobby(){
    const control=new FormControl(null,Validators.required);
  (<FormArray>this.registerForm.get('hobbies')).push(control);
}    
forbiddenNames(control:FormControl):{ [s :string]:boolean}{
if(this.forbiddenUnames.indexOf(control.value)!==-1){
  return {'nameIsForbidden':true};
}
return null;
}
forbiddenEmails(control:FormControl):Promise<any>|Observable<any>{
  const newpromise=new Promise<any>((resolve,reject)=>{
    setTimeout(()=>{
    if(control.value==='test@test.com'){
      resolve({'emailIsForbidden':true});
    }
    else{
      resolve(null);
    }
    },1500);
  });
  return newpromise;
}

}

