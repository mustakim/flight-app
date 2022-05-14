import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MOMENT_TOKEN } from '../@services/moment.service';
import * as moment from 'moment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
  ],
  exports: [],
  providers: [{ provide: MOMENT_TOKEN, useValue: moment }],
  bootstrap: [AppComponent]
})
export class AppModule { }
