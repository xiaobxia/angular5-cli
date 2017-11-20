import { Component, OnInit } from '@angular/core';

/**
 * 组件类应保持精简。
 * 组件本身不从服务器获得数据、不进行验证输入，也不直接往控制台写日志。
 * 它们把这些任务委托给服务(service)。
 */

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
