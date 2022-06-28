import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user';

const USERS = [
  new User(1, 'ferna', 'f123', 'ADMIN'),
  new User(2, 'fernando', 'r123', 'ADMIN')
];
let usersObservable = of(USERS);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private redirectUrl: string | undefined = '/';
  private loginUrl: string = '/lazy';
  private isloggedIn: boolean = false;
  private loggedInUser: User | null = null;
  getAllUsers(): Observable<User[]> {
    return usersObservable;
  }
  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    console.log('%c⧭ password', 'color: #00bf00', password);
    console.log('%c⧭ username', 'color: #733d00', username);
    return this.getAllUsers().pipe(
      map((users: User[]) => {
        let user = users.find(user => (user.username === username) && (user.password === password));
        console.log('%c⧭', 'color: #0088cc', user);
        if (user) {
          this.isloggedIn = true;
          this.loggedInUser = user;
        } else {
          this.isloggedIn = false;
        }
        return this.isloggedIn;
      }));
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
  getRedirectUrl(): string | undefined {
    return this.redirectUrl;
  }
  setRedirectUrl(url: string | undefined): void {
    this.redirectUrl = url;
  }
  getLoginUrl(): string {
    return this.loginUrl;
  }
  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }
  logoutUser(): void {
    this.isloggedIn = false;
  }
}