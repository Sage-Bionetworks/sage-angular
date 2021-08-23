import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  Avatar,
  EMPTY_AVATAR,
} from '@sage-bionetworks/sage-angular/src/lib/avatar';
import { MenuItem } from './navbar-user-button/menu-item';
import { Section } from './section';

@Component({
  selector: 'sage-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() title = 'Sage Angular';
  @Input() githubUrl = 'https://github.com/Sage-Bionetworks/sage-angular';
  @Input() signedIn = true;
  @Input() userAvatar: Avatar = EMPTY_AVATAR;
  @Input() userMenuItems: MenuItem[] = [];

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
