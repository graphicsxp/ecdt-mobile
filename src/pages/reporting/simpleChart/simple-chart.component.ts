import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'simple-chart',
    templateUrl: 'simple-chart.component.html'
})
export class SimpleChartComponent implements OnInit {

    @Input() model;
    @Input() chartType;

    constructor() { }

    ngOnInit() { }
}