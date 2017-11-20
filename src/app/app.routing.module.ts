import { Routes } from '@angular/router';

export const routes: Routes = [
  // 路由重定向
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];
