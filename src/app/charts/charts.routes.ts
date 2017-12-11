import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChart } from './components/lineChart/lineChart.component';
import { PieChart } from './components/pieChart/pieChart.component';
import { BarChart } from './components/barchart/barchart.component';

const chartsRoute: Routes = [{ 
        path: 'chart',
        children: [{
            path: 'linechart',
            component: LineChart
        },
        {
            path: 'piechart',
            component: PieChart
        },
        {
            path: 'barchart',
            component: BarChart
        }
    ]
    }]

export const ChartsRouting: ModuleWithProviders =  RouterModule.forChild(chartsRoute);