import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, currencySymbol: string = '$'): unknown {
    return `${currencySymbol}${value
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }
}
