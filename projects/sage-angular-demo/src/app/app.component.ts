import { Component } from '@angular/core';

import { Section } from '@sage-bionetworks/sage-angular/src/lib/navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sage Angular Demo';
  sections: { [key: string]: Section } = {
    explore: {
      name: 'Explore',
      summary: 'Explore things.'
    },
    organizations: {
      name: 'Organizations',
      summary: 'The organizations you belong to.'
    }
  };

  constructor() {}
}
