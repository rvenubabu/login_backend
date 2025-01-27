import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:UserLoginComponent},
  {path:"home", component:HomeComponent},
];
