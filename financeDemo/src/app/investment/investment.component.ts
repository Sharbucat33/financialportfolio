import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss'],
})
export class InvestmentComponent {
  investmentForm: FormGroup;
  submitted = false;
  showReview = false;
  assetTypes = ['Stocks', 'Bonds', 'Mutual Funds', 'Crypto', 'Real Estate'];

  constructor(private fb: FormBuilder) {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      assetName: ['', Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
      purchasePrice: [null, [Validators.required, Validators.min(0.01)]],
      purchaseDate: ['', Validators.required],
      notes: [''],
    });
  }

  get fcontrols() {
    return this.investmentForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.showReview = true;
  }
}
