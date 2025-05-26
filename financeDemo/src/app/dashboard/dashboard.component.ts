import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  performanceChartData: any;
  dashboardSubs!: Subscription;
  assetChartData: any;
  totalValue = 12500;
  totalgain = 1500;
  annualReturn = 14000;

  constructor(private portfolioSvc: PortfolioService) {}

  /**
   * @method ngOnInit()
   * @description subscribe the data
   */
  ngOnInit(): void {
    //get the assestallocation data
    this.dashboardSubs = this.portfolioSvc
      .getAssetAllocation()
      .pipe()
      .subscribe((data) => {
        this.performanceChartData = data;
      });

    //get the performance data
    this.dashboardSubs = this.portfolioSvc
      .getAssetAllocation()
      .subscribe((data) => {
        this.assetChartData = data;
      });
  }

  /**
   * @method OnDestroy
   * @description to unsubscribe all the subscription
   */
  ngOnDestroy(): void {
    this.dashboardSubs.unsubscribe();
  }
}
