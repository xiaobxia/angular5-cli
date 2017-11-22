import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {moduleRoutes} from './router';
/**
 * 设置路由模块是为了可以配置全局的钩子
 * 或者其他服务
 */
const routes: Routes = [
  // 路由重定向,path不加/,redirectTo要加
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  ...moduleRoutes,
  // 一般用于404
  {path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      // 打印
      // {enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
