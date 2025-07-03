import { Routes } from '@angular/router';
import {SignupComponent} from './components/auth/signup/signup.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { SigninComponent } from './components/auth/signin/signin.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'edit-profile', component: EditProfileComponent },
];
