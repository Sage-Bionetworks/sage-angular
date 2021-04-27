import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterModule } from '@sage-bionetworks/sage-angular/src/lib/footer';
import { GithubButtonModule } from '@sage-bionetworks/sage-angular/src/lib/github-button';
import { NavbarModule } from '@sage-bionetworks/sage-angular/src/lib/navbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FooterModule,
    GithubButtonModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
