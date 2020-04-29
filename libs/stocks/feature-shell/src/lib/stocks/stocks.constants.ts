/*
* Stocks Constants
*
*/
export class STOCKS_CONSTANTS {
    public static timePeriods = [
        { viewValue: 'All available data', value: 'max' },
        { viewValue: 'Five years', value: '5y' },
        { viewValue: 'Two years', value: '2y' },
        { viewValue: 'One year', value: '1y' },
        { viewValue: 'Year-to-date', value: 'ytd' },
        { viewValue: 'Six months', value: '6m' },
        { viewValue: 'Three months', value: '3m' },
        { viewValue: 'One month', value: '1m' }
      ];

    public static stockPickerFormLabels = {   
        symbolExampleText: 'Symbol e.g AAPL',
        symbolErrorText: 'Please enter a symbol',
        startDateText: 'Start date of the time period',
        startDateErrorText: 'Please select a start date',
        endDateText: 'End date of the time period',
        endDateErrorText: 'Please select an end date',
        goButtonText: 'Go'
    };
}