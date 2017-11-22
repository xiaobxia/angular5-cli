import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HeroComponent} from './hero.component';
/**
 * 把RouterModule添加到路由模块的exports中，
 * 以便关联模块（比如AppModule）中的组件可以访问路由模块中的声明，
 * 比如RouterLink 和 RouterOutlet。
 */


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: HeroComponent}
  ])],
  exports: [RouterModule]
})
export class HeroRoutingModule {
}
