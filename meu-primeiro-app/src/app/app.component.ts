import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-food-list></app-food-list>
  <app-food-add></app-food-add>
  `,
})
export class AppComponent {
  title = 'meu-primeiro-app';
}
