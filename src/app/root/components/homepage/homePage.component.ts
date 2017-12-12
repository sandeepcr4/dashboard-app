import { Component, ViewEncapsulation } from '@angular/core';
import { ZoomService } from './homepage.service';

@Component({
    selector: 'home-page',
    templateUrl: './homePage.component.html',
    styleUrls: ['homepage.css'],
    encapsulation: ViewEncapsulation.None
})

export class HomePageComponent {
    welcomeMessage: string = 'Welcome to Dashboard applications';
    constructor (private zoomService: ZoomService) {
        this.zoomService.getZoomData()
        .subscribe(res => {
            console.log(res);
        });
    }
}