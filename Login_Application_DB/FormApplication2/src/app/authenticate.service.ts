import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, HttpModule} from '@angular/http';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  authenticated;

  constructor(private http : HttpClient, private route:ActivatedRoute,private router:Router) { }

  authenticate_user(uname, pw)
  {
    console.log('In authenticate_user  :username :'+uname+' password :'+pw);

    //writing sentences after authentication in subscribe
    this.call_server(uname, pw).subscribe( data => {this.authenticated = data,
      console.log('In authenticate_user inside subscribe :'+this.authenticated);
      if(this.authenticated == true)
      {
        console.log('User authenticated successfully!!');
        alert("logged in successfully!");
         this.router.navigate(['/profile'],{relativeTo:this.route});
         this.authenticated = false;
      }
      else
      {
        console.log('In Invalid credentials else : Authenticated :'+this.authenticated);
        alert("invalid credentials!");
      }
    });
    return this.authenticated;
  }

  call_server(uname, pw) :Observable<boolean>
  {
    return this.http.post<boolean>('http://localhost:8080/user', { username : uname, password: pw}, {}); //{ withCredentials: true }
  }


}
