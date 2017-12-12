import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from '../login/login.module';
import { ChartModule } from '../charts/charts.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/homepage/homePage.component';
import { routing } from './global.routes';
import { ZoomService } from './components/homepage/homepage.service';


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
  providers: [ZoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
