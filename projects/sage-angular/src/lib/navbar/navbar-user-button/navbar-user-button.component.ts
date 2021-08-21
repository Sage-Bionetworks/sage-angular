import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EMPTY_AVATAR, Avatar } from '@sage-bionetworks/sage-angular/src/lib/avatar';
import { MenuItem } from './menu-item';

@Component({
  selector: 'sage-navbar-user-button',
  templateUrl: './navbar-user-button.component.html',
  styleUrls: ['./navbar-user-button.component.scss']
})
export class NavbarUserButtonComponent implements OnInit {
  @Input() avatar: Avatar = EMPTY_AVATAR
  @Input() menuItems: MenuItem[] = [];
  @Output() selectMenuItem = new EventEmitter<MenuItem>();

  constructor() {}

  ngOnInit() {
    console.log(this.menuItems);
  }
}
