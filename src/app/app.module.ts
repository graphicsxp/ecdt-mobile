import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FCM } from '@ionic-native/fcm';

import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { SharedModule } from '../pages/shared/shared.module';
import { ContactModule } from '../pages/contact/contact.module'
import { SettingsModule } from '../pages/settings/settings.module';
import { RequestModule } from '../pages/request/request.module';
import { ReportingModule } from '../pages/reporting/reporting.module';

import 'rxjs/Rx'; // load all features of reactive extensions

//import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { AuthProvider } from '../providers/auth/auth';

// const cloudSettings: CloudSettings = {
//   'core': {
//     'app_id': 'c2ece704', //'e407a129'
//   },
//   'push': {
//     'sender_id': '253214739305', //'203569896210',
//     'pluginConfig': {
//       'ios': {
//         'badge': true,
//         'sound': true
//       },
//       'android': {
//         'iconColor': '#343434'
//       }
//     }
//   }
// };

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    RequestModule,
    SettingsModule,
    ContactModule,
    ReportingModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    //CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [FCM,
    AuthProvider]
})
export class AppModule { }
