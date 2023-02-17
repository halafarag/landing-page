import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigtalBondModule } from './digitalBond/digtal-bond.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DigtalBondModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
