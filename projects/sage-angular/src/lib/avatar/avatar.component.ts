import { Component, Input } from '@angular/core';
import { Avatar } from './avatar';
import { EMPTY_AVATAR } from './mock-avatars';

@Component({
  selector: 'sage-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() name = '';
  @Input() src = '';
  @Input() size = 32;

  constructor() {}

  get avatar(): Avatar {
    return {
      name: this.name,
      src: this.src,
      size: this.size,
    };
  }
  @Input() set avatar(avatar: Avatar) {
    this.name = avatar.name;
    this.src = avatar.src;
    this.size = avatar.size;
  }
}
