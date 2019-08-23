import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmptyRouteComponent} from './empty-route/empty-route.component';
import {TarjetonComponent} from './tarjeton/tarjeton.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    TarjetonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
