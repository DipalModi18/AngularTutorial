import { Component, OnInit, Input, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { AuthenticateService} from './../authenticate.service';

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

  authenticated = false;
  onSubmit(data)
  {
    // if(data.username=="dipal" && data.password=="modi")
    // {
    //   alert("logged in successfully!");
    //   this.router.navigate(['/profile'],{relativeTo:this.route});
    // }
    // else
    // {
    //   alert("invalid credentials!");
    // }
    console.log('In login.component.ts  :username :'+data.username+' password :'+data.password);
    this.authenticated = this.authenticate.authenticate_user(data.username,data.password);
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
