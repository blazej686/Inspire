import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js"

class WeatherService {
    async getWeather() {
        const res = await api.get('api/weather')
        console.log(res.data.main.temp);
        AppState.currentTemp = res.data.main.temp


    }


}

export const weatherService = new WeatherService()



// (292.62K − 273.15) × 9/5 + 32 = 67.046°F

// 292.62K − 273.15 = 19.47°C