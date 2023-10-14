import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QuotesService {
    async getQuote() {
        const res = await api.get('api/quotes')
        console.log('api data in q service', res);
        const newQuote = new Quote(res.data)
        AppState.quote = newQuote
        console.log(newQuote);
    }


}

export const quotesService = new QuotesService()