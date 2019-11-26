import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient, private route:ActivatedRoute, private router:Router) { };

  register_user(na, a, uname, pw)
  {
    this.call_Server(na, a, uname, pw).subscribe();
      alert('User details saved successfully');
      this.router.navigate(['/'],{relativeTo:this.route});
  }

  call_Server(na, a, uname, pw)
  {
    return this.http.post('http://localhost:8080/register', { name : na, age:a, username : uname, password :pw});
  }
}
