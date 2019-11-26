import { Component, OnInit, Input, Output } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { Http, Headers, HttpModule} from '@angular/http';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditDetailsService } from './../edit-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../app.component.css']
})
export class ProfileComponent implements OnInit {

  formdata;
  ngOnInit() {
    this.formdata = new FormGroup({
      name : new FormControl( "", Validators.compose([
        Validators.required
      ])),
      age : new FormControl("", Validators.compose([
        Validators.required
      ])),
      username : new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),
      password : new FormControl("", Validators.compose([
        Validators.required
      ]))
    })
  };

  call_server() : Observable<Object>
  {
    return this.http.get<Object>('http://localhost:8080/profile', { });
  }

  user_details;
  constructor(private route:ActivatedRoute,private router:Router, private http:HttpClient, private edit_service : EditDetailsService) 
  {
    this.call_server().subscribe( data => {
      this.user_details = data;
      this.formdata.name = this.user_details.name;
      //console.log('user_details fetched from server :'+this.user_details);

      //setting values in formdata
      console.log('User\'s name :'+this.user_details.name+" username :"+this.user_details.username+" password :"+this.user_details.password+" age :"+this.user_details.age);
      //this.formdata.name = this.user_details.name;
      this.formdata.patchValue({
        name: this.user_details.name,
        age: this.user_details.age,
        username : this.user_details.username,
        password : this.user_details.password
       }); 
    });
   }

   on_submit(data)
   {
    this.edit_service.edit_user(data.name, data.age, data.username, data.password);
   }

  onLogOutClick()
  {
    this.call_Server().subscribe();
    alert('Logged Out!!');
    this.router.navigate(['/'],{relativeTo:this.route});
  }

  call_Server()
  {
    return this.http.get('http://localhost:8080/logout', { });
  }

  get name() {return this.formdata.get('name'); }
  get age() { return this.formdata.get('age'); }
  get username() {return this.formdata.get('username'); }
  get password() {return this.formdata.get('password'); }
}
