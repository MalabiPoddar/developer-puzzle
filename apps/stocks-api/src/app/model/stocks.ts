import { environment } from '../../environments/environment';
const axios = require('axios');
export class Stocks {
  public static fetchQuotes = async (stockSymbol, timeSpan) => {
    try {
      const url = `${environment.apiURL}/beta/stock/${stockSymbol}/chart/${timeSpan}?token=${environment.apiKey}`;
      const response = await axios({
        method: 'GET',
        url: url
      });
      return response.data;
    } catch (error) {
      console.error("Error while featching stocks: ", error);
      return error;
    }
  }
}