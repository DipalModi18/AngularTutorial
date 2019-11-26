import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AppRoutingModule } from './/app-routing.module';
import { ChangeTextDirective } from './change-text.directive';
import { AboutComponent } from './about/about.component';
import {MyserviceService} from './myservice.service';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AvatarModule } from 'ngx-avatar';
import { Observable} from 'rxjs';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PopoverModule } from 'ngx-popover';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    MainpageComponent,
    ChangeTextDirective,
    AboutComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarModule,
    HttpClientModule,
    NgbModule.forRoot(),
    PopoverModule,
    RouterModule.forRoot([
      {
         path: 'about',
         component: AboutComponent
      }
   ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
