import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule } from 'ng4-charts/ng4-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreesComponent } from './trees.component';
import { CarsComponent } from './cars.component';
import { ClockComponent } from './clock.component';
import { NavBarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent, TreesComponent, CarsComponent, ClockComponent, NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
