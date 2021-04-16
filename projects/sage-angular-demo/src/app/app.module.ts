import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FeatureAModule } from '@sage-bionetworks/sage-angular/src/lib/feature-a';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlopComponent } from './plop/plop.component';

@NgModule({
  declarations: [
    AppComponent,
    PlopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
