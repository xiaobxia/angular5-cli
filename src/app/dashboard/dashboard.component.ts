import { Component, OnInit } from '@angular/core';

/**
 * 组件类应保持精简。
 * 组件本身不从服务器获得数据、不进行验证输入，也不直接往控制台写日志。
 * 它们把这些任务委托给服务(service)。
 */
// 路由组件不需要selector
@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  input1 = 1;
  input2 = 2;
  constructor() { }

  ngOnInit() {
  }

  getResult(): number {
    return this.input1 + this.input2;
  }

  input1change() {
    console.log('change');
  }

  printResult() {
    console.log(this.input1 + this.input2);
  }

}
