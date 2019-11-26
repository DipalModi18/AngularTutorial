import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Router, ActivatedRoute} from '@angular/router';
//import { filter, map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient, private route:ActivatedRoute, private router:Router) { };
  catched_error = false;

  register_user(na, a, uname, pw)
  {
    this.call_Server(na, a, uname, pw).subscribe(data => {
      
    });
    console.log('before if :catched_error :'+this.catched_error);
      if(this.catched_error)
      {
        alert('User already exists!!');
        this.router.navigate(['/register'],{relativeTo:this.route});
      }
      else
      { 
        console.log('In if :catched_error :'+this.catched_error);
        alert('User details saved successfully');
        this.router.navigate(['/'],{relativeTo:this.route});
      }
      console.log('after if :catched_error :'+this.catched_error); 
  }

  call_Server(na, a, uname, pw)
  {
    return this.http.post('http://localhost:8080/register', { name : na, age:a, username : uname, password :pw}, {})
    .catch((err: HttpErrorResponse) => {

      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        this.catched_error = true;
        console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
      }

      // ...optionally return a default fallback value so app can continue (pick one)
      // which could be a default value
      // return Observable.of<any>({my: "default value..."});
      // or simply an empty observable
      return Observable.empty();//throw(err.statusText);
    });
  }
}
