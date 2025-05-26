import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AssetAllocationComponent } from './asset-allocation/asset-allocation.component';
import { NgChartsModule } from 'ng2-charts';
import { PerformanceMetricsComponent } from './performance-metrics/performance-metrics.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AssetAllocationComponent,
    PerformanceMetricsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgChartsModule
  ]
})
export class DashboardModule { }
