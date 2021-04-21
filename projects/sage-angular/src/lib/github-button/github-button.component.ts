import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sage-github-button',
  templateUrl: './github-button.component.html',
  styleUrls: ['./github-button.component.scss']
})
export class GithubButtonComponent implements OnInit {
  @Input() label = 'GitHub';
  @Input() color = '';

  constructor() {}

  ngOnInit(): void {}
}
