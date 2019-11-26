import { Component, OnInit, Input, Output } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { AuthenticateService} from './../authenticate.service';
import { HttpClient} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private route:ActivatedRoute,private router:Router, private authenticate : AuthenticateService) { }

  input_type="password";
  formdata;
  ngOnInit()
  {
    this.formdata = new FormGroup({
      username : new FormControl("", Validators.compose([
        Validators.required
      ])),
      password : new FormControl("", Validators.compose([
        Validators.required
      ]))
    })
  };

  submitted = false;
  authenticated = false;
  onSubmit(data)
  {
    
    this.submitted = true;
    if(this.formdata.valid)
    {
      //authenticate if data is valid
      console.log('In login.component.ts  :username :'+data.username+' password :'+data.password);
      //calling service for authentication
      this.authenticated = this.authenticate.authenticate_user(data.username,data.password);
    }
    
    //console.log('In login.component.ts Authenticated :'+this.authenticated);
  }

  onCancelClick()
  {
    this.formdata.reset();
  };

  onRegisterClick()
  {
    this.router.navigate(['/register'],{relativeTo:this.route});
  }

  //show password : changes input type for the password field
  onCheckboxChange()
  {
    if(this.input_type=="password")
    {
      this.input_type="text";
    }
    else
    {
      this.input_type="password";
    }
  }

  get username() {return this.formdata.get('username'); }
  get password() {return this.formdata.get('password'); }
}
