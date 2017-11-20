import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../../models/index';
@Component({
  selector: 'app-hero-card',
  templateUrl: './heroCard.component.html',
  styleUrls: ['./heroCard.component.scss']
}) // 装饰器后面不能换行
export class HeroCardComponent implements OnInit {

  constructor() { }
  // Input是父组件传过来的props
  @Input() hero: Hero;
  @Input() index: number;

  ngOnInit() {
    console.log(this.index);
    console.log(this.hero);
  }
  // 没有返回值
  onConsoleHandler(hero: Hero): void {
    console.log(hero);
  }
}
