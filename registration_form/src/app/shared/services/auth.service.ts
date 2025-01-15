import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  setUserToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getUserToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  clearStorage(): void {
    localStorage.clear();
  }
}
