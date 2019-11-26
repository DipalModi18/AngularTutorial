import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = "About";
  description = "This page is about XYZ.";
  
  constructor() { }

  ngOnInit() {
  }

}
