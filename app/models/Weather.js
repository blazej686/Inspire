import { AppState } from "../AppState.js"

export class Weather {

    constructor(data) {
        this.coord = data.coord
        this.weather = data.weather
        this.base = data.base
        this.main = data.main.temp
        this.visibility = data.visibility
        this.timezone = data.timezone
        this.id = data.id
        this.location = data.name


    }


    get WeatherTemplateinF() {
        return `
        <p id="temp"><span>Current temp: ${this.main.temp}F</span></p>
        <p class="mdi mdi-weather-lightning fs-4"></p>

        `

    }


}
// (292.62K − 273.15) × 9/5 + 32 = 67.046°F

// 292.62K − 273.15 = 19.47°C