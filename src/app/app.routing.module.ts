import { Routes } from '@angular/router';
import {moduleRoutes} from './router';

export const routes: Routes = [
  // 路由重定向
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  ...moduleRoutes,
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];
