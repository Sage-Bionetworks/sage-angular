import { Component } from '@angular/core';

import { BService } from '@sage-bionetworks/sage-angular/src/lib/feature-b';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sage-angular-demo';

  constructor(private b: BService) {
    b.plop();
  }
}
