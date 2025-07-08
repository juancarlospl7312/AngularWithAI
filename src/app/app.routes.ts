import { Routes } from '@angular/router';
import {SignupComponent} from './components/auth/signup/signup.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { UserListComponent } from './components/users/user-list/user-list.component';

import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductComponent },
];
