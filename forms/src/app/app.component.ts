import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
  <app-forms></app-forms>`,
})
export class AppComponent {
  title = 'forms';
}
