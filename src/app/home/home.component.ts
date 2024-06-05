import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loggedIn = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isAuthenticated().then((authenticated: boolean) => {
      this.loggedIn = authenticated;
    });
  }

  onLoadServers() {
    // complex calculation
    this.router.navigate(['/servers']);
  }

  onLoadServer(id: number) {
    // complex calculation
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
    });
  }

  onLogin() {
    // complex calculation
    this.authService.login();
    this.isAuthenticated().then((authenticated: boolean) => {
      this.loggedIn = authenticated;
    });
  }

  onLogout() {
    // complex calculation
    this.authService.logout();
    this.isAuthenticated().then((authenticated: boolean) => {
      this.loggedIn = authenticated;
    });
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
