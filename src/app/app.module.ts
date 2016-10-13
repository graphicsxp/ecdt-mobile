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

import { BaseService } from '../providers/base.service';
import { LoadingService } from '../pages/shared/service/loading-service';

import {ChartsModule} from 'ng2-charts/ng2-charts';
//import { ChartsModule } from '@progress/kendo-angular-charts';


import 'rxjs/Rx'; // load all features of reactive extensions


@NgModule({
  declarations: [
    MyApp,
    ReportingComponent,
    OrderFormListComponent,
    OrderFormDetailComponent,
    StackedChartComponent,
    SimpleChartComponent,
    RequestDetailComponent,
    RequestListComponent
  ],
  imports: [
    ChartsModule,
    IonicModule.forRoot(MyApp)
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
    RequestListComponent
  ],
  providers: [LoadingService, BaseService]
})
export class AppModule { }
