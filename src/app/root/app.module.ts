import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from '../login/login.module';
import { ChartModule } from '../charts/charts.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/homepage/homePage.component';
import { routing } from './global.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    ChartModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
