import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';

import { GithubButtonModule } from '@sage-bionetworks/sage-angular/src/lib/github-button';
import { HelloWorldModule } from '@sage-bionetworks/sage-angular/src/lib/hello-world';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AppRoutingModule,
    GithubButtonModule,
    HelloWorldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
