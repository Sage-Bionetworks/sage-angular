import { Component, Input, OnInit } from '@angular/core';
import { EMPTY_AVATAR, Avatar } from '@sage-bionetworks/sage-angular/src/lib/avatar';
import { MenuItem } from './menu-item';
import { MOCK_MENU_ITEMS } from './mock-menu-items';

@Component({
  selector: 'sage-navbar-user-button',
  templateUrl: './navbar-user-button.component.html',
  styleUrls: ['./navbar-user-button.component.scss']
})
export class NavbarUserButtonComponent implements OnInit {
  @Input()
  menuItems: MenuItem[] = MOCK_MENU_ITEMS;
  @Input()
  avatar: Avatar = EMPTY_AVATAR

  constructor() {}

  ngOnInit() {
    console.log(this.menuItems);
  }
}
