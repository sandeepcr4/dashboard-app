import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { IChart } from './charts.interface';

@Injectable()
export class ChartService {
    private barChartData: IChart[] = [{
        label: 'HD',
        value: 10
    },
    {
        label: 'BOFA',
        value: 10
    },
    {
        label: 'CITI',
        value: 10
    },
    {
        label: 'KIA',
        value: 10
    },
    {
        label: 'GOOGL',
        value: 10
    }];

    private dataSubject = new BehaviorSubject<IChart[]>(this.barChartData);
    
    $data = this.dataSubject.asObservable();

    addData(newData: IChart) {
        this.barChartData.push(newData);
        this.dataSubject.next(this.barChartData);
    }
}