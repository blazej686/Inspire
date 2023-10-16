import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawTemp() {
    const currentFahrenheit = AppState.currentFahrenheit
    if (currentFahrenheit == null) {
        return
    }
    setHTML('temp', AppState.currentFahrenheit)
}

export class WeatherController {
    constructor() {
        this.getWeather()
        AppState.on('currentFahrenheit', _drawTemp)

    }


    async getWeather() {

        try {
            await weatherService.getWeather()

        } catch (error) {
            Pop.error(error)
            console.error(error);

        }

    }
}
