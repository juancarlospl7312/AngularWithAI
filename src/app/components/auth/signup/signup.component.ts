import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {
  // private readonly logger = inject(LoggerService);

  signupForm = new FormGroup({
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

  onSubmit() {
    if (this.signupForm.valid) {
      const formValue = this.signupForm.getRawValue();
      // this.logger.info('Form submitted:', formValue);
      // Here you would typically make an API call to submit the form data
    }
  }
}
