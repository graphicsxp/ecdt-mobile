import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { ReportingComponent } from '../pages/reporting/reporting.component';
import { StackedChartComponent } from '../pages/reporting/stackedChart/stacked-chart.component';
import { SimpleChartComponent } from '../pages/reporting/simpleChart/simple-chart.component';

import { OrderFormListComponent } from '../pages/orderForm/component/orderForm-list.component';
import { OrderFormDetailComponent } from '../pages/orderForm/component/orderForm-detail.component';

import { RequestListComponent } from '../pages/request/component/request-list.component';
import { RequestDetailComponent } from '../pages/request/component/request-detail.component';

import { LoginComponent } from '../pages/shared/component/login.component';
import { SignupComponent } from '../pages/shared/component/signup.component';

import { HeaderComponent } from '../pages/shared/component/header.component';

import { BaseService } from '../providers/base.service';
import { LoadingService } from '../pages/shared/service/loading-service';

import { ChartsModule } from 'ng2-charts/ng2-charts';
//import { ChartsModule } from '@progress/kendo-angular-charts';


import 'rxjs/Rx'; // load all features of reactive extensions

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'c2ece704'
  }
};

@NgModule({
  declarations: [
    MyApp,
    ReportingComponent,
    OrderFormListComponent,
    OrderFormDetailComponent,
    StackedChartComponent,
    SimpleChartComponent,
    RequestDetailComponent,
    RequestListComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent
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
    OrderFormListComponent,
    OrderFormDetailComponent,
    StackedChartComponent,
    SimpleChartComponent,
    RequestDetailComponent,
    RequestListComponent,
    LoginComponent,
    SignupComponent
  ],
  providers: [LoadingService, BaseService]
})
export class AppModule { }
