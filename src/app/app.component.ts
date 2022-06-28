import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './modules/secure/services/auth.service';
import { User } from './modules/secure/services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exercise-two';
  loggedInUser: User | null | undefined;
  constructor(private authService: AuthService, private router: Router) {
    this.loggedInUser = this.authService.getLoggedInUser();
  }

  secure() {
    let uname = 'ferna';
    let pwd = 'f123';
    this.authService.isUserAuthenticated(uname, pwd).subscribe(
      (authenticated: boolean) => {
        if (authenticated) {
          // let url = this.authService.getRedirectUrl();
          this.router.navigate(['/secure']);
        } else {

          console.log('%c⧭Error', 'color: #917399',);
        }
      }
    );
    setTimeout(() => {
      this.authService.logoutUser();
      this.loggedInUser = null;
    }, 2000);

  }
}


export const tours: any = [
  {
    id: 45,
    name: 'Fernando',
  },

];