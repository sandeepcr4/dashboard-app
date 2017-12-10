import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/homepage/homePage.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: '', component: AppComponent, pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);