import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'my-app';
  count = signal(1110);

  constructor() {
    this.count.set(3);
  }
}
