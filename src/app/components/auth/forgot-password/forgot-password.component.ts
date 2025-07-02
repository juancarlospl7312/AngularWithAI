import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink]
})
export class ForgotPasswordComponent {
  email = '';
  successMessage = '';
  errorMessage = '';
  isLoading = false;

  constructor(
    // private authService: AuthService
) {}

  onSubmit() {
    if (!this.email) {
      this.errorMessage = 'Please enter your email address';
      return;
    }

    this.isLoading = true;
    // this.authService.forgotPassword(this.email).subscribe({
    //   next: () => {
    //     this.successMessage = 'Password reset instructions have been sent to your email';
    //     this.email = '';
    //   },
    //   error: (error) => {
    //     this.errorMessage = error.message || 'An error occurred. Please try again.';
    //   },
    //   complete: () => {
    //     this.isLoading = false;
    //   }
    // });
  }
}
