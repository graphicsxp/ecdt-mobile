import { RequestModule } from './../pages/request/request.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FCM } from '@ionic-native/fcm';

import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { SharedModule } from '../pages/shared/shared.module';

import 'rxjs/Rx'; // load all features of reactive extensions

import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RequestModule,
    SharedModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [FCM,
    AuthProvider]
})
export class AppModule { }
