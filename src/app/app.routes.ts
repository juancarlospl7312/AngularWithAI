import { Routes } from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {SignupComponent} from './components/auth/signup/signup.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'edit-profile', component: EditProfileComponent },
];
