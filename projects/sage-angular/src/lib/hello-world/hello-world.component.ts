import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sage-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  @Input() name: string = 'world';

  constructor() {}

  ngOnInit(): void {}
}
