import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { HttpClient} from '@angular/common/http';
import {FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})

export class CalcComponent implements OnInit {

  constructor(private http : HttpClient) { };

  formdata;
  ngOnInit() {
    this.formdata = new FormGroup({
      number : new FormControl("", {}),
    });
  }
  num;
  onSubmit(data)
  {
    this.calling(data.number).subscribe( data => {this.num = data});
    //console.log(this.num);
  }

  calling(num): Observable<number>
  {
    return this.http.post<number>('http://localhost:8080/api/tasks', {num});
  }
}
