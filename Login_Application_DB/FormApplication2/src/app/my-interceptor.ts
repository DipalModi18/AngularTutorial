import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
constructor() { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

console.log("intercepted request ... ");

// Clone the request to add the new header.
// const authReq = req.clone({ 
//     headers: req.headers.set("withCredentials", "true")});

    var req = req.clone({
        withCredentials: true
    });

console.log("Sending request with new header now ...");

return next.handle(req);
//send the newly created request
// return next.handle(authReq)
// .catch((error, caught) => {
// //intercept the respons error and displace it to the console
// console.log("Error Occurred");
// console.log(error);
// //return the error to the method that called it
// return Observable.throw(error);
// }) as any;
}
}