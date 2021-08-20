import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AvatarModule } from '@sage-bionetworks/sage-angular/src/lib/avatar';
import { NavbarComponent } from './navbar.component';
import { NavbarUserButtonComponent } from './navbar-user-button/navbar-user-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    AvatarModule,
  ],
  declarations: [NavbarComponent, NavbarUserButtonComponent],
  exports: [NavbarComponent, NavbarUserButtonComponent],
})
export class NavbarModule {}
