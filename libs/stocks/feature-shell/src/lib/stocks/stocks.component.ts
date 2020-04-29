import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PriceQueryFacade } from '@coding-challenge/stocks/data-access-price-query';
import { STOCKS_CONSTANTS } from './stocks.constants';

@Component({
  selector: 'coding-challenge-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  public period: string;
  public symbol: string;
  public subscription: Subscription;
  public stockPickerForm: FormGroup;


  quotes$ = this.priceQuery.priceQueries$;

  timePeriods = [
    { viewValue: 'All available data', value: 'max' },
    { viewValue: 'Five years', value: '5y' },
    { viewValue: 'Two years', value: '2y' },
    { viewValue: 'One year', value: '1y' },
    { viewValue: 'Year-to-date', value: 'ytd' },
    { viewValue: 'Six months', value: '6m' },
    { viewValue: 'Three months', value: '3m' },
    { viewValue: 'One month', value: '1m' }
  ];

  constructor(private fb: FormBuilder, private priceQuery: PriceQueryFacade) {
  }

  ngOnInit() {
    this.stockPickerForm = this.fb.group({
      symbol: [null, Validators.required],
      period: [null, Validators.required]
    });
    this.stockPickerForm.valueChanges.pipe(
      debounceTime(STOCKS_CONSTANTS.DEBOUNCETIME)).subscribe(value => {
      if (this.stockPickerForm.valid) {
        const { symbol, period } = value;
        this.priceQuery.fetchQuote(symbol, period);
      }
    });
  }
}
