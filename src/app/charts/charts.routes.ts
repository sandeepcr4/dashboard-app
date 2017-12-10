import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChart } from './components/lineChart/lineChart.component';
import { PieChart } from './components/pieChart/pieChart.component';

const chartsRoute: Routes = [{ 
        path: 'chart',
        children: [{
            path: 'linechart',
            component: LineChart
        },
        {
            path: 'piechart',
            component: PieChart
        }]
    }]

export const ChartsRouting: ModuleWithProviders =  RouterModule.forChild(chartsRoute);