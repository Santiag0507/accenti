import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import  {Workspace2Component}from './workspace-2/workspace-2.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { Component } from '@angular/core';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'calendario', component: CalendarioComponent },
  {path: 'workspace-2', component: Workspace2Component},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/calendario', pathMatch: 'full' },
  { path: '', redirectTo: '/workspace-2', pathMatch: 'full' },
 

];