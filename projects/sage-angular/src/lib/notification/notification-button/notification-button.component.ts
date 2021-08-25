import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sage-notification-button',
  templateUrl: './notification-button.component.html',
  styleUrls: ['./notification-button.component.scss']
})
export class NotificationButtonComponent implements OnInit {
  numNotifications = 1;

  constructor() { }

  ngOnInit(): void {
  }

  clickButton(): void {
    console.log('Notification button clicked');
  }
}
