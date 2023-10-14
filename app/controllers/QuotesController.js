import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawQuote() {
    const quote = AppState.quote
    if (quote == null) {
        return
    }
    // @ts-ignore
    setHTML('quoteCard', quote.QuoteTemplate)
}

export class QuotesController {
    constructor() {
        console.log('Quotes controller loaded');
        this.getQuote()
        AppState.on('quote', _drawQuote)

    }
    async getQuote() {
        try {
            await quotesService.getQuote()

        } catch (error) {
            Pop.error(error)
            console.error(error);

        }
    }
}