import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WritableSignal } from '@angular/core';
import { inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);

  // Signal to track authentication status
  isAuthenticated = signal(false);

  constructor() {
    // Initialize authentication status from localStorage or other persistence
    const token = localStorage.getItem('authToken');
    this.isAuthenticated.set(!!token);
  }

  // Method to change password
  changePassword(currentPassword: string, newPassword: string): Promise<void> {
    return this.http
      .post('/api/auth/change-password', {
        currentPassword,
        newPassword
      })
      .toPromise()
      .then(() => {
        // Handle successful password change
        // You might want to refresh the token or update user data here
        return Promise.resolve();
      })
      .catch(error => {
        throw error;
      });
  }

}
