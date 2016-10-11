import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ReportingService } from './service/reporting-service';
import { LoadingService } from '../shared/service/loading-service';

//import { ChartModule } from 'angular2-highcharts';

@Component({
  templateUrl: 'reporting.component.html',
  providers: [ReportingService, LoadingService]
})
export class ReportingComponent implements OnInit {

  private model;
  public selectedReport = 'breakdownPerMonth';
  public errorMessage = '';

  ngOnInit(): void {
    this._reportingService.getSimpleChartData()
      .subscribe(
      data => this.model = data,
      error => this.errorMessage = <any>error
      );
  }

  constructor(public navCtrl: NavController, private _reportingService: ReportingService) { }

  changeReport(): void {
    console.log('change report');
    if (this.selectedReport == 'breakdownPerMonthAndTargetLanguage') {
      this._reportingService.getStackedChartData()
        .subscribe(
        data => this.model = data,
        error => this.errorMessage = <any>error
        );
    } else {
      this._reportingService.getSimpleChartData()
        .subscribe(
        data => this.model = data,
        error => this.errorMessage = <any>error
        );
    }
  }

  chartHovered(event): void { }

  chartClicked(event): void { }

}
