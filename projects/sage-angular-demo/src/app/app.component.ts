import { Component, ViewEncapsulation } from '@angular/core';

import { Section } from '@sage-bionetworks/sage-angular/src/lib/navbar';
import { MenuItem } from '@sage-bionetworks/sage-angular/src/lib/navbar/navbar-user-button/menu-item';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Sage Angular Demo';
  sections: { [key: string]: Section } = {
    explore: {
      name: 'Explore',
      summary: 'Explore things.'
    }
  };

  constructor() {}

  selectUserMenuItem(menuItem: MenuItem): void {
    console.log('Navbar user menu item selected', menuItem);
  }
}
