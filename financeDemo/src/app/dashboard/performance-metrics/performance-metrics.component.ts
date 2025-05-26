import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-performance-metrics',
  templateUrl: './performance-metrics.component.html',
  styleUrls: ['./performance-metrics.component.scss'],
})
export class PerformanceMetricsComponent {
  @Input() performanceChartData: any;
  chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top', display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value: any) => '$' + value,
        },
      },
    },
  };
}
