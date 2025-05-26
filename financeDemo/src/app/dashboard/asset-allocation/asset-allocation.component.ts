import { Component, Input } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-asset-allocation',
  templateUrl: './asset-allocation.component.html',
  styleUrls: ['./asset-allocation.component.scss'],
})
export class AssetAllocationComponent {
  @Input() assetChartData: any;
  chartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '60%',
    radius: '60%',
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          boxWidth: 12,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
  };

  chartPlugins = [];
}
