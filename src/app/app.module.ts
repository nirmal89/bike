import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app.routing.module';
import { AppComponent }  from './app.component';
import { RoutingComponents } from './app.routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRouterModule
  ],
  
  declarations: [ AppComponent, RoutingComponents],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
