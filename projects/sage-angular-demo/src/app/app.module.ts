import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FeatureAModule } from '@sage-bionetworks/sage-angular/src/lib/feature-a';
import { FeatureBModule } from '@sage-bionetworks/sage-angular/src/lib/feature-b';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureAModule,
    FeatureBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
