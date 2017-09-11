import { CoffeeService } from './services/coffee.service';
import { GeolocationService } from './services/geolocation.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule,MdIconModule,MdInputModule,MdSelectModule,MdSliderModule,
         MdToolbarModule, MdCardModule,MdSlideToggleModule } from '@angular/material';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,MdIconModule,MdInputModule,MdSelectModule,
    MdSliderModule,MdToolbarModule, MdCardModule,MdSlideToggleModule
  ],
  providers: [
    GeolocationService,
    CoffeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
