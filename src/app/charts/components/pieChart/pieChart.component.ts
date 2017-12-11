//import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { Component, AfterViewInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { IChart } from '../../services/charts.interface';
import { ChartService } from '../../services/charts.service';
import * as d3 from "d3";

@Component({
    selector: 'bar-chart',
    templateUrl: './pieChart.component.html',
    encapsulation: ViewEncapsulation.None
})

export class PieChart implements AfterViewInit {
    @ViewChild("pieChart") private chartContainer: ElementRef;
    message: string = 'Pie chart for expenses';
    constructor() { }
    ngAfterViewInit() {
        
    }
}