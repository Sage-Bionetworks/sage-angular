import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sage-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output()
  login = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {}
}
