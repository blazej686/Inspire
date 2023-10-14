import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawTemp() {
    const temp = AppState.currentTemp
    setHTML('temp', temp)
}

export class WeatherController {
    constructor() {
        AppState.on('currentTemp', this.getWeather)
        AppState.on('currentTemp', _drawTemp)

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