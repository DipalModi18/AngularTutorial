import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { MyserviceService } from './myservice.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import {PopoverModule} from "ngx-popover";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  last_event = '';
  isavailable = false;

  myEvent = {
    event_name : 'MY EVENT',
    event_date : '11-06-2018'
  };

  countries = ['India', 'USA', 'Canada'];

  name = 'Dipal';

  creatingEvent(event) {
    console.log(event);
    this.last_event = event;
  };

  myClickFunction(event)
  {
    if(this.isavailable==false)
    {
      this.isavailable=true;
    }
    else
    {
      this.isavailable=false;
    }
  };

  constructor(private myservice : MyserviceService) {}
  todaydate = undefined;
  formdata;
  ngOnInit()
  {
    this.todaydate = this.myservice.showTodayDate();
    
    //For model driven form
    this.formdata = new FormGroup({
      userid : new FormControl("", Validators.compose([
        Validators.required
      ])),
      password : new FormControl("", Validators.compose([
        Validators.required,
      ]))
    });
  };

  onSubmitClick(data)  //Templete driven form
  {
    if(data.userid=="dipal" && data.password=="modi")
    {
      alert("Successfully logged In");
    }
    else
    {
      alert("Invalid Credentials");
    }
  };

  onSubmitClickModel(data)
  {
    // formdata and data both objects are containing values which are given as input by the user.
    if(this.formdata.controls['userid'].value=="dipal" && this.formdata.controls['password'].value=="modi") 
    {
      alert('formdata.controls User id :'+this.formdata.controls['userid'].value+' password : '+this.formdata.controls['password'].value);
      alert('data. User id :'+data.userid+' password : '+data.password);
      alert("Successfully logged In");
    }
    else
    {
      alert("Invalid Credentials");
    }
  };

  // avatarClicked() {
  //   alert('Avatar clicked')
  // }


  timeString="1:00PM";
  checkRefund() {
    alert(this.timeString);
    console.log(this.getTwentyFourHourTime(this.timeString));
  }

  getTwentyFourHourTime(amPmString) { 
    var d = new Date("1/1/2013 " + amPmString); 
    return d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
  }

  addSpace() {
    let index  = this.timeString.indexOf('AM') 
    if(index==-1)  {
      index = this.timeString.indexOf('PM');
    }
    console.log(this.timeString.substring(0, index)+ ' '+ this.timeString.substring(index));
  }

  addSpace2() {
    let index = this.timeString.search( /a/i )
  }
}


