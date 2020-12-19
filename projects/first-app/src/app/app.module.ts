import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HellolibModule } from 'aks-hellolib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HellolibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
