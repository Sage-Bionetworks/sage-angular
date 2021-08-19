import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'demo-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  @HostBinding('class.main-content') readonly mainContentClass = true;

  constructor() {}
}
