import { Component, Input } from '@angular/core';
import { Avatar } from './avatar';
import { EMPTY_AVATAR } from './mock-avatars';

@Component({
  selector: 'sage-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() avatar: Avatar = EMPTY_AVATAR;
  @Input() name = '';
  @Input() src = '';
  @Input() size = 32;

  constructor() {}
}
