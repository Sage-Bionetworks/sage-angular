import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'demo-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @HostBinding('class.main-content') readonly mainContentClass = true;

  constructor() {}
}
