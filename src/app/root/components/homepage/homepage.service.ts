import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class ZoomService {
    constructor(private _http: Http) { }
    
    getZoomData() {
        return this._http.get("/api/zoom")
          .map(result => {
              let data = result.json();
              return data;
          });
    }
}