
import axios from 'axios';
import { localAutoCompleteData, localCurrentCondition, localFiveDaysForeCast } from '../localData';
const apk = 'RXIjAM4g1U5MxqqHAbkxYE6TmJJX7gfG';
const local = true;


export const setCurrentConditionDataInCity = async (key, city, isCelsius) => {

        const res = local ?
            localCurrentCondition :
            await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apk}&language=en-us&details=false`).data//get current condition
        city.temperature = isCelsius ?
            res[0].Temperature.Metric.Value : res[0].Temperature.Imperial.Value;
        city.weatherCondition = res[0].WeatherText;
}

export const setFiveDaysForecastDataInCity = async (key, city, isCelsius) => {
        const res = local ?
            localFiveDaysForeCast :
            await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apk}&language=en-us&details=true&metric=${isCelsius}`).data//get 5 days forecast                 
        for (const dayData of res.DailyForecasts) {
            city.fiveDaysForecast.push({
                minTemp: dayData.Temperature.Minimum.Value,
                maxTemp: dayData.Temperature.Maximum.Value,
                date: dayData.Date,
            })
        }//for

    
}

export const getCitiesArrayFromApi = async(search) => {
    
        return local ?
            localAutoCompleteData
            :
            await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apk}&q=${search}&language=en-us`).data//get cities data from auto complete.
        
}