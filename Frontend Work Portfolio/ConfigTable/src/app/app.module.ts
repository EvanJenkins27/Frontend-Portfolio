import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ConfigEditComponent} from './ConfigEdit';
import {ConfigListComponent} from './ConfigList';

@NgModule({
  declarations: [
    AppComponent,
    ConfigEditComponent,
    ConfigListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };
