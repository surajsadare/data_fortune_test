import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  setUserToken(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user') ?? '');
  }

  clearStorage(): void {
    localStorage.clear();
  }
}
