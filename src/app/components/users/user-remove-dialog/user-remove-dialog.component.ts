import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { User } from '../models/user';

@Component({
  selector: 'app-user-remove-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './user-remove-dialog.component.html',
  styleUrl: './user-remove-dialog.component.css'
})
export class UserRemoveDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<UserRemoveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User },
    private snackBar: MatSnackBar
  ) {}

  async removeUser() {
    try {
      // TODO: Implement actual user removal logic
      // For now, just close the dialog with success
      this.snackBar.open('User removed successfully', 'Close', {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      this.dialogRef.close(true);
    } catch (error) {
      this.snackBar.open('Error removing user', 'Close', {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-warn']
      });
    }
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
