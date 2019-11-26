import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router, ActivatedRoute, RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  
  userList : [
    {
      username : 'dipal',
      password : 'modi'
    }
  ];

  childTitle:string = 'This text is passed to child';

}
