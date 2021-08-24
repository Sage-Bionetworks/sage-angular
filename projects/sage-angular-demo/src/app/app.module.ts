import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from '@sage-bionetworks/sage-angular/src/lib/navbar';
import { PageTitleModule } from '@sage-bionetworks/sage-angular/src/lib/page-title';
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
    NavbarModule,
    PageTitleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
