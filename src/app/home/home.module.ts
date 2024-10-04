import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModule } from './imports';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ImportsModule
  ],
  exports : [HomeComponent,HomePageComponent]

})
export class HomeModule { }
