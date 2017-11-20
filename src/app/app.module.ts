import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import {routes} from './app.routing.module';
import {AppComponent} from './app.component';


@NgModule({
  // 声明本模块中拥有的视图类
  // 在module中注册组件
  declarations: [
    AppComponent
  ],
  // 本模块声明的组件模板需要的类所在的其它模块
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  // 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
  providers: [],
  // 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。
  bootstrap: [AppComponent]
})
export class AppModule {
}
