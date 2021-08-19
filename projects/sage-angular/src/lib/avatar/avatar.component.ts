import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'sage-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() name = '';
  @Input() src = '';
  @Input() size = 40;

  constructor() {}

  ngOnInit(): void {
    of(10).subscribe((item) => console.log('ITEM', item));
  }
}
