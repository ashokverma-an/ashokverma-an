import { Component,inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.scss'
})
export class ChangepasswordComponent {
  authService = inject(AuthService);
  router = inject(Router);
  public logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
