export class City {
    constructor() {
        this.key = '';
        this.name = '';
        this.weatherCondition = '';
        this.temperature = '';
        this.fiveDaysForecast = [];
    }
}

export class Favorite {
    constructor(key,name,weatherCondition,temperature) {
        this.key = key;
        this.name = name;
        this.weatherCondition =weatherCondition;
        this.temperature = temperature;
    }
}