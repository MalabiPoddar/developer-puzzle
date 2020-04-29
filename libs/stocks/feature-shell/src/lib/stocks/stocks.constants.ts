/*
* Stock Constants. 
*
*/
export class STOCKS_CONSTANTS {
    public static DEBOUNCETIME: 500
    public static timePeriods = [
        { viewValue: 'All available data', value: 'max' },
        { viewValue: 'Five years', value: '5y' },
        { viewValue: 'Two years', value: '2y' },
        { viewValue: 'One year', value: '1y' },
        { viewValue: 'Year-to-date', value: 'ytd' },
        { viewValue: 'Six months', value: '6m' },
        { viewValue: 'Three months', value: '3m' },
        { viewValue: 'One month', value: '1m' }
      ]
    public static stockPickerFormLabels = {   
        symbolExampleText: 'Symbol e.g AAPL',
        symbolErrorText: 'Please enter a symbol',
        dropdownText: 'Favorite time period',
        timePeriodErrorText: 'Please select a period from the dropdown'
    }
};
