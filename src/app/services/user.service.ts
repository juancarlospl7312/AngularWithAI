import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../components/users/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/users';

  constructor(private http: HttpClient) {}

  removeUser(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError(() => error);
  }
}
