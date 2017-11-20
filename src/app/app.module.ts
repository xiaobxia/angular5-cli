import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import {routes} from './app.routing.module';

import {AppComponent} from './app.component';
import {HeroComponent} from '../components/hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  // 在module中注册组件
  declarations: [
    AppComponent,
    HeroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
