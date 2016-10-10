import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ReportingComponent } from '../pages/reporting/reporting.component';
import { Page2 } from '../pages/page2/page2';
import { OrderFormListComponent } from '../pages/orderForm/component/orderForm-list.component';
import { OrderFormDetailComponent } from '../pages/orderForm/component/orderForm-detail.component';
import {ChartsModule} from 'ng2-charts/ng2-charts';
//import { ChartModule } from 'angular2-highcharts';

import 'rxjs/Rx'; // load all features of reactive extensions


@NgModule({
  declarations: [
    MyApp,
    ReportingComponent,
    Page2,
    OrderFormListComponent,
    OrderFormDetailComponent
  ],
  imports: [
   // ChartModule,
   ChartsModule, 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReportingComponent,
    Page2,
    OrderFormListComponent,
    OrderFormDetailComponent
  ],
  providers: []
})
export class AppModule {}
