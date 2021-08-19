import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule as NgxAvatarModule } from 'ngx-avatar';
import { AvatarComponent } from './avatar.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, NgxAvatarModule],
  declarations: [AvatarComponent],
  exports: [AvatarComponent],
})
export class AvatarModule {}
