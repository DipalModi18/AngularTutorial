import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private userProfileUrl = `http://dev.gosnowapp.com/gosnow-server/index.php/service/manager/getProfile`;

  constructor(private http: HttpClient) { }

  getUserProfileDetails(): any {
    const request = {
      'sessionId': '1cc8b1bf921af8e8070cc5be94115b3e77dd2b63'
    };
  return this.http.post<any>(this.userProfileUrl, request)
    .pipe(map(data => data));
  }

}
