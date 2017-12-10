import { Component } from '@angular/core';

@Component({
    selector: 'home-page',
    templateUrl: './homePage.component.html'
})

export class HomePageComponent {
    welcomeMessage: string = 'Welcome to Dashboard applications';
}