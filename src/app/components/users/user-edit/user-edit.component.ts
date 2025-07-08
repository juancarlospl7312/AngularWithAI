import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Subject, BehaviorSubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule
  ],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, OnDestroy {
  @Input() user: User | null = null;
  @Output() save = new EventEmitter<User>();
  @Output() cancel = new EventEmitter<void>();

  genderOptions = ['Male', 'Female', 'Other'];
  userForm: FormGroup;
  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [0],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.user) {
      this.userForm.patchValue(this.user);
    }
    
    // Watch for form changes
    this.userForm.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      // Handle form changes if needed
    });
  }

  onSave(): void {
    if (this.userForm.valid) {
      const savedUser = this.userForm.value;
      this.save.emit(savedUser);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
