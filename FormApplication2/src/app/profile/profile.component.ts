import { Component, OnInit, Input, Output } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

  onLogOutClick()
  {
    alert('Logged out');
    this.router.navigate(['/login'],{relativeTo:this.route});
  }

}
