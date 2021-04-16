import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BService {
  constructor() {}

  plop(): void {
    console.log('plop');
  }
}
