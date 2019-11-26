import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, ActivatedRoute} from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthenticateService} from './authenticate.service';
import { RegisterService} from './register.service';
import { EditDetailsService} from './edit-details.service';
import { Http, Headers, HttpModule} from '@angular/http';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MyHttpInterceptor } from './my-interceptor'
import { Observable } from 'rxjs/Observable';


@NgModule({
  declarations: [
    AppComponent,
    // RegisterComponent,
    // LoginComponent,
    // ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule, 
    RouterModule.forRoot([])
  ],
  exports : [
    ReactiveFormsModule,
  ],
  providers: [AuthenticateService, RegisterService, EditDetailsService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
