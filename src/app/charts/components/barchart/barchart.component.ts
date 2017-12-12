//import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { Component, AfterViewInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { IChart } from '../../services/charts.interface';
import { ChartService } from '../../services/charts.service';
import * as d3 from "d3";

@Component({
    selector: 'bar-chart',
    templateUrl: './barchart.component.html',
    encapsulation: ViewEncapsulation.None
})

export class BarChart implements AfterViewInit {
    @ViewChild("barChart") private chartContainer: ElementRef;
    message: string = 'bar chart for expenses';

    private data: Array<IChart>;
    private tempData;
    private margin: any = { top: 20, bottom: 20, left: 20, right: 20};
    private chart: any;
    private width: number;
    private height: number;
    private xScale: any;
    private yScale: any;
    private colors: any;
    private xAxis: any;
    private yAxis: any;

  
    constructor(private chartService: ChartService) {
        this.chartService.getBarChartData()
        .subscribe(res => {
            this.data = <IChart[]>res;
            this.createChart();
            if (this.data) {
                this.updateChart();
            }
        });
    }

    ngAfterViewInit() {
        /* this.data = [];
        setTimeout(() => {
            this.generateData();
            setTimeout(() => this.generateData(), 3000);
        }, 1000);
        this.createChart(); */
        
    }

    createChart() {
        let element = this.chartContainer.nativeElement;
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
        let svg = d3.select(element).append('svg')
          .attr('width', element.offsetWidth)
          .attr('height', element.offsetHeight);
    
        // chart plot area
        this.chart = svg.append('g')
          .attr('class', 'bars')
          .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
    
        // define X & Y domains
        let xDomain = this.data.map((d: IChart) => d.label);
        let yDomain = [0, d3.max(this.data, (d: IChart) => d.value)];
    
        // create scales
        this.xScale = d3.scaleBand().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
        this.yScale = d3.scaleLinear().domain(yDomain).range([this.height, 0]);
    
        // bar colors
        this.colors = d3.scaleLinear().domain([0, this.data.length]).range(<any[]>['red', 'blue']);
    
        // x & y axis
        this.xAxis = svg.append('g')
          .attr('class', 'axis axis-x')
          .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
          .call(d3.axisBottom(this.xScale));
        this.yAxis = svg.append('g')
          .attr('class', 'axis axis-y')
          .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
          .call(d3.axisLeft(this.yScale));
    }

    updateChart() {
        // update scales & axis
        this.xScale.domain(this.data.map((d: IChart) => d.label));
        this.yScale.domain([0, d3.max(this.data, (d: IChart) => d.value)]);
        this.colors.domain([0, this.data.length]);
        this.xAxis.transition().call(d3.axisBottom(this.xScale));
        this.yAxis.transition().call(d3.axisLeft(this.yScale));
    
        let update = this.chart.selectAll('.bar')
          .data(this.data);
    
        // remove exiting bars
        update.exit().remove();
    
        // update existing bars
        this.chart.selectAll('.bar').transition()
          .attr('x', (d: IChart) => this.xScale(d.label))
          .attr('y', (d: IChart) => this.yScale(d.value))
          .attr('width', (d: IChart) => this.xScale.bandwidth())
          .attr('height', (d: IChart) => this.height - this.yScale(d.value))
          .style('fill', (d: IChart, i) => this.colors(i));
    
        // add new bars
        update
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('x', (d: IChart) => this.xScale(d.label))
          .attr('y', (d: IChart) => this.yScale(0))
          .attr('width', this.xScale.bandwidth())
          .attr('height', 0)
          .style('fill', (d: IChart, i) => this.colors(i))
          .transition()
          .delay((d: IChart, i) => i * 10)
          .attr('y', (d: IChart) => this.yScale(d.value))
          .attr('height', (d: IChart) => this.height - this.yScale(d.value));
    }
}