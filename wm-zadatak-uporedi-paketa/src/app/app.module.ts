import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardsContainerModule } from './cards-container/cards-container.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CardsContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
