export class City {
    constructor() {
        this.key = '';
        this.name = '';
        this.weatherCondition = '';
        this.temperature = {
            celsius: '',
            fahrenheit: '',
        };
        this.fiveDaysForecast = [];
    }
}

export class Favorite {
    constructor(key, name, weatherCondition, temperature) {
        this.key = key;
        this.name = name;
        this.weatherCondition = weatherCondition;
        this.temperature = {
            celsius: temperature.celsius,
            fahrenheit: temperature.fahrenheit
        };
    }
}

export class DayForeCast {
    constructor() {
        this.temperatures = {
            celsius: {
                minTemp: '',
                maxTemp: '',
            },
            fahrenheit: {
                minTemp: '',
                maxTemp: '',
            },

        };
            this.date='';
    }
}