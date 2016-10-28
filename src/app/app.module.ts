import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { SharedModule } from '../pages/shared/shared.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { RequestModule } from '../pages/request/request.module';
import { LoginModule } from '../pages/login/login.module';
import { ReportingModule } from '../pages/reporting/reporting.module';
import { SignupModule} from '../pages/signup/signup.module';

import 'rxjs/Rx'; // load all features of reactive extensions

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'c2ece704'
  },
  'push': {
    'sender_id': '253214739305',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    SharedModule,
    RequestModule,
    SettingsModule,
    LoginModule,
    ReportingModule,
    SignupModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: []
})
export class AppModule { }
