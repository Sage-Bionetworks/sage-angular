import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sage-github-button',
  templateUrl: './github-button.component.html',
  styleUrls: ['./github-button.component.scss']
})
export class GithubButtonComponent implements OnInit {
  @Output()
  onClick = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}
}
