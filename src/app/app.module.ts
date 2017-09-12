import { CoffeeService } from './services/coffee.service';
import { GeolocationService } from './services/geolocation.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule,MdIconModule,MdInputModule,MdSelectModule,MdSliderModule,
         MdToolbarModule, MdCardModule,MdSlideToggleModule } from '@angular/material';
import 'hammerjs';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { CoffeeFormComponent } from './components/coffee-form/coffee-form.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

const routes:Routes =[
  {path:'',component:CoffeeListComponent},
  {path:'coffee',component:CoffeeFormComponent},
  {path:'coffee/:id',component:CoffeeFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CoffeeFormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
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
