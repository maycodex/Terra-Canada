import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { LoginRequest, AuthResponse, User } from '../../shared/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private readonly VALID_CREDENTIALS = {
    username: 'administrador',
    password: 'admin123'
  };

  private readonly MOCK_USER: User = {
    id: '1',
    username: 'administrador',
    email: 'admin@terracanada.com',
    role: 'admin',
    name: 'Administrador'
  };

  constructor() {}

  login(credentials: LoginRequest): Observable<AuthResponse> {
    return of(null).pipe(
      delay(1000),
      map(() => {
        if (
          credentials.username === this.VALID_CREDENTIALS.username &&
          credentials.password === this.VALID_CREDENTIALS.password
        ) {
          const response: AuthResponse = {
            token: 'mock-jwt-token-' + Date.now(),
            user: this.MOCK_USER
          };
          this.currentUserSubject.next(this.MOCK_USER);
          this.isAuthenticatedSubject.next(true);
          return response;
        } else {
          throw new Error('Credenciales inválidas');
        }
      })
    );
  }

  logout(): void {
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
