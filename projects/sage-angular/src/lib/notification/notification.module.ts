import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NotificationButtonComponent } from './notification-button/notification-button.component';
import { NotificationService } from './notification.service';

@NgModule({
  imports: [CommonModule, MatBadgeModule, MatButtonModule, MatIconModule],
  declarations: [NotificationButtonComponent],
  providers: [NotificationService],
  exports: [NotificationButtonComponent],
})
export class NotificationModule {}
