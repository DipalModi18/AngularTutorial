import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

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
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
