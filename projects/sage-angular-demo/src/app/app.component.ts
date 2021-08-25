import { Component, ViewEncapsulation } from '@angular/core';

import {
  MenuItem,
  MOCK_MENU_ITEMS,
  Section,
} from '@sage-bionetworks/sage-angular/src/lib/navbar';
import {
  Avatar,
  MOCK_AVATAR_32,
} from '@sage-bionetworks/sage-angular/src/public-api';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Sage Angular Demo';
  sections: { [key: string]: Section } = {
    explore: {
      name: 'Explore',
      summary: 'Explore things.',
    },
  };
  userAvatar: Avatar = MOCK_AVATAR_32;
  userMenuItems: MenuItem[] = MOCK_MENU_ITEMS;

  constructor() {}

  selectUserMenuItem(menuItem: MenuItem): void {
    console.log('Navbar user menu item selected', menuItem);
  }

  clickNotificationButton(): void {
    console.log('Notification button clicked');
  }
}
