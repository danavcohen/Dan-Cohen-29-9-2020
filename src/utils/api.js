
import axios from 'axios';
import {
    localAutoCompleteData, localCurrentCondition, localFiveDaysForeCastInCelsius,
    localFiveDaysForeCastInFahr
} from '../data/localData';
import { DayForeCast } from '../modal/classes';
const apk = 'RXIjAM4g1U5MxqqHAbkxYE6TmJJX7gfG';
const local = false;


export const setCurrentConditionDataInCity = async (key, city, isCelsius) => {
    let res;
    if (local) { res = localCurrentCondition }
    else {
        try {
            res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apk}&language=en-us&details=false`)//get current condition
            res = res.data;
        } catch (error) {
            throw error.message;
        }
    }


    city.temperature = {
        celsius: res[0].Temperature.Metric.Value, fahrenheit: res[0].Temperature.Imperial.Value
    };

    city.weatherCondition = res[0].WeatherText;
}

export const setFiveDaysForecastDataInCity = async (key, city, isCelsius) => {
    let resInCelsius, resInFahr;
    if (local) {
        resInCelsius = localFiveDaysForeCastInCelsius;
        resInFahr = localFiveDaysForeCastInFahr;
    }
    else {
        try {
            resInCelsius = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apk}&language=en-us&details=true&metric=${true}`)//get 5 days forecast                 
            resInFahr = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apk}&language=en-us&details=true&metric=${false}`)//get 5 days forecast                 
            resInCelsius = resInCelsius.data;
            resInFahr = resInFahr.data
        } catch (error) {
            throw error.message;
        }
    }
    const fiveDaysForecast = [
        new DayForeCast(),
        new DayForeCast(),
        new DayForeCast(),
        new DayForeCast(),
        new DayForeCast()
    ];
    for (let index = 0; index < 5; index++) {
        fiveDaysForecast[index].temperatures.celsius.maxTemp = resInCelsius.DailyForecasts[index].Temperature.Maximum.Value;
        fiveDaysForecast[index].temperatures.celsius.minTemp = resInCelsius.DailyForecasts[index].Temperature.Minimum.Value;
        fiveDaysForecast[index].date = resInCelsius.DailyForecasts[index].Date;
        fiveDaysForecast[index].temperatures.fahrenheit.maxTemp = resInFahr.DailyForecasts[index].Temperature.Maximum.Value;
        fiveDaysForecast[index].temperatures.fahrenheit.minTemp = resInFahr.DailyForecasts[index].Temperature.Minimum.Value;
    }//for
    city.fiveDaysForecast = [...fiveDaysForecast];

}

export const getCitiesArrayFromApi = async (search) => {
    try {
        if (local) { return localAutoCompleteData }
        const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apk}&q=${search}&language=en-us`)//get cities data from auto complete.
        return res.data
    } catch (error) {
        throw error.message;
    }


}