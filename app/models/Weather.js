export class Weather {

    constructor(data) {
        this.coord = data.coord
        this.weather = data.weather
        this.base = data.base
        this.main = data.main
        this.visibility = data.visibility
        this.timezone = data.timezone
        this.id = data.id
        this.location = data.name


    }

    get TempTemplate() {

        return `
        <span>Current temp:${AppState.currentTemp}</span>
        `
    }

    get computeTempinC() {

        return console.log(

            `${this.main.temp}` - 273.15
        );


    }

}
// (292.62K − 273.15) × 9/5 + 32 = 67.046°F

// 292.62K − 273.15 = 19.47°C