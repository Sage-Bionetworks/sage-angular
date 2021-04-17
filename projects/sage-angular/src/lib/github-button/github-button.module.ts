import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { GithubButtonComponent } from './github-button.component';

@NgModule({
  declarations: [GithubButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [GithubButtonComponent]
})
export class GithubButtonModule { }
