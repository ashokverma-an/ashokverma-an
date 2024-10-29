import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ChangepasswordComponent } from './authentication/changepassword/changepassword.component';
import { authGuard } from './services/auth/auth.guard';


export const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'signup', component: SignupComponent
    },

    {
        path: 'admin', component: ChangepasswordComponent, canActivate: [authGuard]
    }
];
