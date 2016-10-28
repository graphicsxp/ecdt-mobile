import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import { ChartsModule } from '@progress/kendo-angular-charts';
import {SimpleChartComponent} from './simpleChart/simple-chart.component';
import {StackedChartComponent} from './stackedChart/stacked-chart.component';
import {ReportingComponent} from './reporting.component';
import {ReportingService} from './service/reporting-service';
import{SharedModule} from '../shared/shared.module';

@NgModule({
  imports:[IonicModule, ChartsModule,SharedModule],  //no forRoot here
  providers:[ReportingService],
  declarations:[ReportingComponent, SimpleChartComponent, StackedChartComponent],
  exports:[ReportingComponent, SimpleChartComponent, StackedChartComponent],
  entryComponents:[ReportingComponent, SimpleChartComponent, StackedChartComponent]  //<-- add all your module components to here
})
export class ReportingModule{

}