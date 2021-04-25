import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar.component';
import { GithubButtonModule } from '@sage-bionetworks/sage-angular/src/lib/github-button';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    GithubButtonModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule {}
