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
  // @Output一般用在事件上

  ngOnInit() {
    console.log(this.index);
    console.log(this.hero);
  }
  // 没有返回值
  onConsoleHandler(event, hero: Hero): void {
    console.log(event);
    console.log(hero);
  }
}
