import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Section } from './section';

@Component({
  selector: 'sage-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input()
  title = 'Sage Angular';
  @Input()
  githubUrl = 'https://github.com/Sage-Bionetworks/sage-angular';
  @Input()
  user: unknown = null;
  @Output()
  login = new EventEmitter<Event>();

  sections: { [key: string]: Section } = {
    'explore': {
      'name': 'Explore',
      'summary': 'Explore things.'
    },
    'organizations': {
      'name': 'Organizations',
      'summary': 'The organizations you belong to.'
    }
  }
  sectionsKeys: string[] = Object.keys(this.sections);

  constructor() {}

  ngOnInit(): void {}

  setSections(sections: { [key: string]: Section } ) {
    this.sections = sections;
    this.sectionsKeys = Object.keys(sections);
  }
}
