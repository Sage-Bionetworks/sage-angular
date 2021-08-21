import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  Avatar,
  MOCK_AVATAR_32,
} from '@sage-bionetworks/sage-angular/src/lib/avatar';
import { MenuItem } from './navbar-user-button/menu-item';
import { MOCK_MENU_ITEMS } from './navbar-user-button/mock-menu-items';
import { Section } from './section';

@Component({
  selector: 'sage-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() title = 'Sage Angular';
  @Input() githubUrl = 'https://github.com/Sage-Bionetworks/sage-angular';
  @Input() user: unknown = null;
  @Input() avatar: Avatar = MOCK_AVATAR_32;
  @Input() avatarMenuItems: MenuItem[] = MOCK_MENU_ITEMS;

  @Output() signIn = new EventEmitter<Event>();
  @Output() signUp = new EventEmitter<Event>();
  @Output() userMenuItemSelected = new EventEmitter<MenuItem>();

  private _sections: { [key: string]: Section } = {};
  sectionsKeys: string[] = [];

  constructor() {}

  @Input()
  public set sections(s: { [key: string]: Section }) {
    this._sections = s;
    this.sectionsKeys = Object.keys(s);
  }

  public get sections(): { [key: string]: Section } {
    return this._sections;
  }

  selectUserMenuItem(menuItem: MenuItem) {
    this.userMenuItemSelected.emit(menuItem);
  }
}
