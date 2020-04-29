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
  public timePeriods = STOCKS_CONSTANTS.timePeriods;
  public formLabel = STOCKS_CONSTANTS.stockPickerFormLabels;
  
  quotes$ = this.priceQuery.priceQueries$;

  constructor(private formBuilder: FormBuilder, private priceQuery: PriceQueryFacade) {
  }

  ngOnInit() {
    this.stockPickerForm = this.formBuilder.group({
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
