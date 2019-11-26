import { Component, OnInit, Input, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private route:ActivatedRoute,private router:Router) { }

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

  onSubmit(data)
  {
    if(data.username=="dipal" && data.password=="modi")
    {
      alert("logged in successfully!");
      this.router.navigate(['/profile'],{relativeTo:this.route});
    }
    else
    {
      alert("invalid credentials!");
    }
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
