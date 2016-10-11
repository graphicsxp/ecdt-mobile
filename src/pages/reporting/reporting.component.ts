import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { ChartModule } from 'angular2-highcharts';

@Component({
  templateUrl: 'reporting.component.html'
})
export class ReportingComponent {

  public chartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];
  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartOptions: any = {
    animation: false,
    responsive: true
  };
  public chartColors: Array<any> = [
    { 
      backgroundColor: 'rgba(255,159,177,0.2)',
      borderColor: 'rgba(255,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { 
      backgroundColor: 'rgba(77,255,96,0.2)',
      borderColor: 'rgba(77,255,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { 
      backgroundColor: 'rgba(148,159,255,0.2)',
      borderColor: 'rgba(148,159,255,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public chartLegend: boolean = true;
  public chartType: string = 'line';

  options: Object;

  constructor(public navCtrl: NavController) {
    // this.options = {
    //   title: { text: 'simple chart' },
    //   series: [{
    //     data: [29.9, 71.5, 106.4, 129.2],
    //   }]
  }

  chartHovered(event): void{}

  chartClicked(event): void{}

}
