import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationButtonComponent } from './notification-button/notification-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NotificationButtonComponent],
  exports: [NotificationButtonComponent],
})
export class NotificationModule {}
