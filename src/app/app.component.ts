import { Component } from '@angular/core';

@Component({
  // 选择器
  selector: 'app-root',
  // 模板的地址
  templateUrl: './app.component.html',
  // 样式的地址
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
}
