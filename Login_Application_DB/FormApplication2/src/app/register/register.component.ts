import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, MinLengthValidator, ValidatorFn, AbstractControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { agevalidator } from './agevalidator';
import { RegisterService} from './../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  constructor(private route:ActivatedRoute,private router:Router, private register : RegisterService) { }

  formdata;
  ngOnInit() 
  {
    this.formdata = new FormGroup({
      name : new FormControl("", Validators.compose([
        Validators.required
      ])),
      username : new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),
      age : new FormControl("", Validators.compose([
        Validators.required,
        this.agevalidator
      ])),
      password : new FormControl("", Validators.compose([
        Validators.required
      ])),
      confirmpassword : new FormControl("", Validators.compose([
        Validators.required,
        //this.confirmingpassword
      ]))
    })
  }

  /*passwordvalidator(control : FormControl)
  {
    if(this.formdata.password != this.formdata.confirmpassword)
    {
      return { control : true};
    }
    return null;
  };
  
  function passwordvalidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value !== RegisterComponent.formdata.password) {
      return { 'confirmpassword': true };
  }
  return null;
}
  */

  agevalidator(control) {
    if( control.value < 18)
    {
      return { 'age' : true};
    }
  }

  /*confirmingpassword(control) 
  {
    if( control.value != this.password)
    {
      return { 'confirmpassword' : true};
    }
  }*/

  onSubmit(data)
  {
    this.submitted = true;
    // if(this.formdata.valid)
    // {
    //   alert('User details saved successfully!');
    //   this.formdata.reset();
    //   this.router.navigate(['/'],{relativeTo:this.route});
    // }
    // else
    // {
    //   alert('Error!');
    // }
    if(this.formdata.valid)
    {
      this.register.register_user(data.name, data.age, data.username, data.password);
    }
  }

  onCancelClick()
  {
    this.formdata.reset();
    this.submitted = false;
  };

  get name() {return this.formdata.get('name'); }
  get username() {return this.formdata.get('username'); }
  get age() {return this.formdata.get('age'); }
  get password() {return this.formdata.get('password'); }
  get confirmpassword() {return this.formdata.get('confirmpassword'); }
}

