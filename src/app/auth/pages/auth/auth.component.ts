import { Component, inject } from '@angular/core';
import { MatButton, MatButtonModule } from "@angular/material/button";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MatButton, MatButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export default class AuthComponent {

  private readonly _route = inject(Router);
  private readonly _authService = inject(AuthService);

  constructor() {}
  
  onAuth() {
    this._authService.isAuth = true;
    this._route.navigate(['/']);
  }
}
