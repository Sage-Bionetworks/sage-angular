import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sage-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input()
  title = "Sage Angular";
  @Input()
  githubUrl = "https://github.com/Sage-Bionetworks/sage-angular";
  @Output()
  login = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {}
}
