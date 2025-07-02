import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink]
})
export class EditProfileComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', Validators.required),
    zipcode: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{5}$')
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^\d{10}$')
    ])
  });

  isLoading = false;
  successMessage = '';
  errorMessage = '';

  onSubmit() {
    if (this.profileForm.valid) {
      this.isLoading = true;
      // Here you would typically make an API call to update the profile
      // For now, we'll just log the values
      console.log('Profile updated:', this.profileForm.value);
      this.successMessage = 'Profile updated successfully';
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  }

  onCancel() {
    this.profileForm.reset();
  }
}
