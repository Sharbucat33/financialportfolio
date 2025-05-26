import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentRoutingModule } from './investment-routing.module';
import { InvestmentComponent } from './investment.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InvestmentComponent
  ],
  imports: [
    CommonModule,
    InvestmentRoutingModule,
    ReactiveFormsModule
  ]
})
export class InvestmentModule { }
