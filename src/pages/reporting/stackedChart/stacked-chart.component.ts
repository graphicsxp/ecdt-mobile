import { Component, OnInit, Input } from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'stacked-chart',
    templateUrl: 'stacked-chart.component.html'
})
export class StackedChartComponent implements OnInit {
    @Input() model;
    @Input() chartType;

    constructor() { }

    ngOnInit() { }
}