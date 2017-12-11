import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LineChart } from './components/lineChart/lineChart.component';
import { PieChart } from './components/pieChart/pieChart.component';
import { BarChart } from './components/barchart/barchart.component';
import { ChartsRouting } from './charts.routes';
import { ChartService } from './services/charts.service';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        ChartsRouting,
        HttpModule
    ],
    declarations: [
        LineChart,
        PieChart,
        BarChart
    ],
    exports: [
        LineChart,
        PieChart,
        BarChart
    ],
    providers: [ChartService]
})

export class ChartModule {};