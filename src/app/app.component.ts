import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    this.changeCSSvhProperty();
  }

  private changeCSSvhProperty(): void {
    const root: HTMLElement = document.querySelector(':root');
    root.style.setProperty('--vh', `${window.innerHeight / 100}px`);
    window.addEventListener('resize', () => {
      root.style.setProperty('--vh', `${window.innerHeight / 100}px`);
    });
  }
}
