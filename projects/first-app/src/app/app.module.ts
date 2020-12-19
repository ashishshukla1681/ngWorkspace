import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HellolibModule } from 'aks-hellolib';
import { FirstLibModule } from 'aks-global-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HellolibModule,
    FirstLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
