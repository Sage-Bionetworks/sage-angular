import { Component, HostBinding, OnInit } from '@angular/core';
import { PageTitleService } from '@sage-bionetworks/sage-angular/src/lib/page-title';

@Component({
  selector: 'demo-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  @HostBinding('class.main-content') readonly mainContentClass = true;

  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit() {
    this.pageTitleService.setTitle('Home | Sage Angular Demo');
  }
}
