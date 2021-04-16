import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sage-feature-a',
  template: '<p>feature-a works!</p>',
  // templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.scss']
})
export class FeatureAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
