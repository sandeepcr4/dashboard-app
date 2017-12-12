import { Component, ViewEncapsulation, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ZoomService } from './homepage.service';

@Component({
    selector: 'home-page',
    templateUrl: './homePage.component.html',
    styleUrls: ['homepage.css'],
    encapsulation: ViewEncapsulation.None
})

export class HomePageComponent implements AfterViewInit{
    @ViewChild("imageZoom") private zoomContainer: ElementRef;
    welcomeMessage: string = 'Welcome to Dashboard applications';
    private settings: any;
    private nWidth: number;
    private nHeight: number;
    private position: any;
    private magnifyCSS: any;
    private imageSrc: string;

    constructor (private zoomService: ZoomService) {
        this.zoomService.getZoomData()
        .subscribe(res => {
            this.settings = res;
            this.imageSrc = res.images.imageUrlDesktop;
            console.log(this.zoomContainer);
        });
    }

    ngAfterViewInit() {

    }

    mouseMove(evt: MouseEvent) {
        
    }

}