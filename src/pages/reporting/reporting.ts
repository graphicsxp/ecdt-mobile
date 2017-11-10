import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ReportingService } from './service/reporting-service';

@IonicPage()

@Component({
  selector: 'reporting',
  templateUrl: 'reporting.html',
  providers: [ReportingService]
})
export class ReportingPage implements OnInit {

  public model;
  public selectedReport = 'breakdownPerMonthAndTargetLanguage';
  public errorMessage = '';

  public chartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];

 public series: [
        8000,
        3560,
        5140,
        6984,
        1511,
        150,
        689,
        780,
        915,
        1580,
        5406,
        7800
    ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartOptions: any = {
    //    animation: true,
    responsive: true,
    //  easing: "easeOutQuart"
    scaleShowVerticalLines: false

  };
  public chartType: string = 'bar';
  public isLoading: boolean = false;


  ngOnInit(): void {
    // this._reportingService.getSimpleChartData()
    //   .subscribe(
    //   data => this.model = data,
    //   error => this.errorMessage = <any>error
    //   );
    this._reportingService.getStackedChartData()
      .subscribe(
      data => this.model = data,
      error => this.errorMessage = <any>error
      );
  }

  constructor(public navCtrl: NavController, private _reportingService: ReportingService) { }

  changeReport(): void {
    console.log('change report');
    this.isLoading = true;
    if (this.selectedReport == 'breakdownPerMonthAndTargetLanguage') {
      this._reportingService.getStackedChartData()
        .subscribe(
        data => {
          this.model = data;
          this.isLoading = true;
        },
        error => this.errorMessage = <any>error
        );
    } else {
      this._reportingService.getSimpleChartData()
        .subscribe(

        data => {
          this.model = data;
          this.isLoading = true;
        },
        error => this.errorMessage = <any>error
        );
    }
  }

  chartHovered(event): void { }

  chartClicked(event): void { }

}
