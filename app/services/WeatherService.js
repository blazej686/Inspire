import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"

class WeatherService {
    async getWeather() {
        const res = await api.get('api/weather')
        console.log(res.data.main.temp);
        AppState.currentKel = res.data.main.temp

        let kel = AppState.currentKel
        const diff = 273.15
        let celsius = kel - diff
        AppState.currentCelsius = Math.round(celsius)
        console.log('currentC in appstate', AppState.currentCelsius, 'current kel in app', kel);

        let fahrenheit = (kel - 273.15) * 9 / 5 + 32
        AppState.currentFahrenheit = Math.round(fahrenheit)
        console.log(AppState.currentFahrenheit, 'F');


    }


}

export const weatherService = new WeatherService()



// (292.62K − 273.15) × 9/5 + 32 = 67.046°F

// 292.62K − 273.15 = 19.47°C