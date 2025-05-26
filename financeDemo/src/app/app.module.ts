import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { CurrencyPipe } from './shared/currency.pipe';

@NgModule({
  declarations: [AppComponent, CurrencyPipe],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
