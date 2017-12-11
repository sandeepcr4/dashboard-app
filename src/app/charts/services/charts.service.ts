import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { IChart } from './charts.interface';

@Injectable()
export class ChartService {
    constructor(private _http: Http) { }
    
    getBarChartData() {
        return this._http.get("/api/gdp")
          .map(result => {
              let data = <IChart[]>result.json();
              return data;
          });
    }

    getLineChartData() {

    }
    
    /* private dataSubject = new BehaviorSubject<IChart[]>(this.barChartData);
    
    $data = this.dataSubject.asObservable();

    addData(newData: IChart) {
        this.barChartData.push(newData);
        this.dataSubject.next(this.barChartData);
    } */
}