import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notificationsCounts: BehaviorSubject<number> = new BehaviorSubject<number>(5);

  constructor() {}

  getNotificationsCount(): Observable<number> {
    return this.notificationsCounts.asObservable();
  }

  setNotificationCount(count: number): void {
    this.notificationsCounts.next(count);
  }
}
