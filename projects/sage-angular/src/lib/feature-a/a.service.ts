import { Injectable } from '@angular/core';

import { BService } from '@sage-bionetworks/sage-angular/src/lib/feature-b';

@Injectable({
  providedIn: 'root',
})
export class AService {
  constructor(private b: BService) {}
}
