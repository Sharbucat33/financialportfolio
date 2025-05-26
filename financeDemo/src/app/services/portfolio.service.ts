import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor() {}

  getAssetAllocation(): Observable<any> {
    const data = {
      labels: ['Stocks', 'Bonds', 'Real Estate', 'Cash'],
      datasets: [
        {
          data: [50, 20, 20, 10],
          backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
        },
      ],
    };
    return of(data);
  }

  getPerformanceMetrics(): Observable<any> {
    return of({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Portfolio',
          data: [10000, 10500, 10200, 10800, 11200],
          borderColor: '#007bff',
          fill: false,
        },
        {
          label: 'Benchmark',
          data: [10000, 10300, 10100, 10700, 10900],
          borderColor: '#ffc107',
          fill: false,
        },
      ],
    });
  }
}
