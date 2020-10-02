import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainInfosComponent } from './components/main-infos/main-infos.component';
import { DetailledInfosComponent } from './components/detailled-infos/detailled-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInfosComponent,
    DetailledInfosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
