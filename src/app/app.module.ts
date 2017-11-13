import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

//import 'rxjs/Rx'; // load all features of reactive extensions
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RequestModule } from './../pages/request/request.module';
import { SharedModule } from '../pages/shared/shared.module';

import { AuthProvider } from '../providers/auth/auth';

import { FCM } from '@ionic-native/fcm';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AppVersion } from '@ionic-native/app-version';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FCM,
    AuthProvider,
    SplashScreen,
    StatusBar,
    AppVersion]
})
export class AppModule { }
