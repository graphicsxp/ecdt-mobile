import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { ReportingComponent } from '../pages/reporting/reporting.component';
import { StackedChartComponent } from '../pages/reporting/stackedChart/stacked-chart.component';
import { SimpleChartComponent } from '../pages/reporting/simpleChart/simple-chart.component';

import { RequestListComponent } from '../pages/request/request-list/request-list.component';
import { RequestDetailComponent } from '../pages/request/request-detail/request-detail.component';

import { SettingsComponent } from '../pages/settings/settings.component';

import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/signup/signup.component';

import { HeaderComponent } from '../pages/shared/component/header.component';

import { RequestService } from '../pages/request/service/request.service';
import { LoadingService } from '../pages/shared/service/loading-service';
import { NetworkAvailabilityService } from '../pages/shared/service/networkAvailability-service';

import { ChartsModule } from 'ng2-charts/ng2-charts';
//import { ChartsModule } from '@progress/kendo-angular-charts';


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
    MyApp,
    ReportingComponent,
    StackedChartComponent,
    SimpleChartComponent,
    RequestDetailComponent,
    RequestListComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SettingsComponent
  ],
  imports: [
    ChartsModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReportingComponent,
    StackedChartComponent,
    SimpleChartComponent,
    RequestDetailComponent,
    RequestListComponent,
    LoginComponent,
    SignupComponent,
    SettingsComponent
  ],
  providers: [LoadingService, RequestService, NetworkAvailabilityService]
})
export class AppModule { }
