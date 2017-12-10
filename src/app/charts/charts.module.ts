import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LineChart } from './components/lineChart/lineChart.component';
import { PieChart } from './components/pieChart/pieChart.component';
import { ChartsRouting } from './charts.routes';

@NgModule({
    imports: [
        CommonModule,
        ChartsRouting
    ],
    declarations: [
        LineChart,
        PieChart
    ],
    exports: [
        LineChart,
        PieChart
    ]
})

export class ChartModule {};