import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { SimpleChartComponent } from './simpleChart/simple-chart.component';
import { StackedChartComponent } from './stackedChart/stacked-chart.component';
import { ReportingComponent } from './reporting.component';
import { ReportingService } from './service/reporting-service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [IonicModule, ChartsModule, SharedModule, BrowserAnimationsModule],  //no forRoot here
  providers: [ReportingService],
  declarations: [ReportingComponent, SimpleChartComponent, StackedChartComponent],
  exports: [ReportingComponent],
  entryComponents: [ReportingComponent]  //<-- add all your module components to here
})
export class ReportingModule {

}