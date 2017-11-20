import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  heroes = [{name: '英雄1', age: 1}, {name: '英雄2', age: 2}, {name: '英雄3', age: 3}];
}
