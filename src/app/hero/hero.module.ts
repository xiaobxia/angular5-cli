import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeroComponent} from './hero.component';
import {HeroDetailComponent} from './detail/heroDetail.component';
import {HeroRoutingModule} from './hero-routing.module';
import {HeroCardComponent} from '../../components/heroCard/heroCard.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroComponent,
    HeroDetailComponent,
    HeroCardComponent
  ]
})
export class HeroModule {

}
