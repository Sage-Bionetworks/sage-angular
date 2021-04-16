import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FeatureAModule } from '@sage-bionetworks/sage-angular/src/lib/feature-a';
// import { FeatureBModule } from '@sage-bionetworks/sage-angular/src/lib/feature-b';
// import { FeatureAModule } from '@sage-bionetworks/sage-angular';
// import { FeatureBModule } from '@sage-bionetworks/sage-angular';

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
    FeatureAModule,
    // FeatureBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
