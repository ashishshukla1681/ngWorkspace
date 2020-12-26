import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { MyElementComponent } from './my-element/my-element.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    MyElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [MyElementComponent]
})

export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const el = createCustomElement(MyElementComponent, { injector: this.injector });
    customElements.define('my-element', el);
  }
}
