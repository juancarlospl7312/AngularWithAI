import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatError, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { User } from '../../users/models/user';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCommonModule,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileComponent {
  private user!: User;

  editProfileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    zipCode: new FormControl(null, [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  genders = ['Male', 'Female', 'Other', 'Prefer not to say'];

  ngOnInit() {
    // TODO: Load user data from service
    // this.editProfileForm.patchValue(this.user.data);
  }

  onSubmit() {
    if (this.editProfileForm.valid) {
      // TODO: Implement profile update logic
      console.log('Form submitted:', this.editProfileForm.value);
    }
  }
}
