import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { SimpleChartComponent } from './simpleChart/simple-chart.component';
import { StackedChartComponent } from './stackedChart/stacked-chart.component';
import { ReportingPage } from './reporting';
import { ReportingService } from './service/reporting-service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicPageModule.forChild(ReportingPage),
    ChartsModule,
    SharedModule
    ],  //no forRoot here
  providers: [ReportingService],
  declarations: [ReportingPage, SimpleChartComponent, StackedChartComponent],
  exports: [ReportingPage],
  entryComponents: [ReportingPage]  //<-- add all your module components to here
})
export class ReportingModule {

}
