import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GithubButtonModule } from '@sage-bionetworks/sage-angular/src/lib/github-button';
import { HelloWorldModule } from '@sage-bionetworks/sage-angular/src/lib/hello-world';
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
    GithubButtonModule,
    HelloWorldModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
