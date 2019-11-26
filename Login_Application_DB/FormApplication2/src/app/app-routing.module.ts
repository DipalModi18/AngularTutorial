import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const routes: Routes = 
[
  { 
    path: '', 
    component: LoginComponent 
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'profile',
    component : ProfileComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports : [
    RouterModule,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
    //AppRoutingModule,
  ],
  declarations: [
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
})
export class AppRoutingModule { }
