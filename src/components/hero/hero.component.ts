import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
}) // 装饰器后面不能换行
export class HeroComponent implements OnInit {

  constructor() { }
  // Input是父组件传过来的props
  @Input() hero: Hero;

  ngOnInit() {
    console.log(this.hero);
  }
  // 没有返回值
  onConsoleHandler(hero: Hero): void {
    console.log(hero);
  }

}
