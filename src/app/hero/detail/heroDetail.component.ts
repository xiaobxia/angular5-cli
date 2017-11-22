import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {Hero} from '../../../models/index';
/**
 * 组件类应保持精简。
 * 组件本身不从服务器获得数据、不进行验证输入，也不直接往控制台写日志。
 * 它们把这些任务委托给服务(service)。
 */
// 路由组件不需要selector
@Component({
  templateUrl: './heroDetail.component.html',
  styleUrls: ['./heroDetail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  constructor( private router: Router,
               private location: Location) { }

  heroes: Hero[] = [{name: '英雄1', age: 1, id: 1}, {name: '英雄2', age: 2, id: 2}];

  ngOnInit() {
    console.log('a');
    console.log(this.heroes);
  }
  // 路由跳转
  jumpToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  // 路由回退
  goBack(): void {
    this.location.back();
  }
}
