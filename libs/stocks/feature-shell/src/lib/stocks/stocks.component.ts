import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { STOCKS_CONSTANTS } from './stocks.constants';
import { PriceQueryFacade } from '@coding-challenge/stocks/data-access-price-query';

@Component({
  selector: 'coding-challenge-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  public stockPickerForm: FormGroup;
  public symbol: string;
  public startDate: Date;
  public endDate: Date;
  public maxDate: Date;
  public subscription: Subscription;

  quotes$ = this.priceQuery.priceQueries$;

  constructor(private fb: FormBuilder, private priceQuery: PriceQueryFacade) {}

  ngOnInit() {
    this.maxDate = new Date();
    this.stockPickerForm = this.fb.group({
      symbol: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });
    this.subscription = this.stockPickerForm.valueChanges.subscribe(value => {
      const { startDate, endDate } = value;
      if (endDate != null && endDate < startDate){    
        this.stockPickerForm.patchValue({startDate : new Date(endDate)});
      }
    })
  }

  public fetchQuote(): void {
    const startDate = this.stockPickerForm.value.startDate;
    const endDate = this.stockPickerForm.value.endDate;
    const period = STOCKS_CONSTANTS.MAX;
    if (this.stockPickerForm.valid) {
      this.updateDateOnError(this.stockPickerForm);
      const { symbol } = this.stockPickerForm.value;
      this.priceQuery.fetchQuote(symbol, period);
      this.priceQuery.fetchFilterQuote(startDate, endDate);
    }
  }

  public updateDateOnError(stockPickerForm: FormGroup): void {
    if (this.dateValidation(stockPickerForm)) {
      this.stockPickerForm.value.startDate = stockPickerForm.value.endDate;
      this.stockPickerForm.controls['startDate'].setValue(stockPickerForm.value.endDate);
    }
  }

  public dateValidation(stockPickerForm: FormGroup): boolean {
    if(stockPickerForm.value.startDate && stockPickerForm.value.endDate) {
      const fromDate = Date.parse(stockPickerForm.value.startDate);
      const toDate = Date.parse(stockPickerForm.value.endDate);
      if (fromDate > toDate) {
      return true
      }
    }
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
