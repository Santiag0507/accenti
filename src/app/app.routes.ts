import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalendarioComponent } from './calendario/calendario.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/calendario', pathMatch: 'full' }
];