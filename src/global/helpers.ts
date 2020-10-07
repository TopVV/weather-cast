import {
  ForecastDataInterface,
  InitForecastDataInterface,
} from "../interfaces";

export const mapInitialForecast = (
  initialForecast: InitForecastDataInterface
): ForecastDataInterface => ({
  consolidatedWeather: initialForecast?.consolidated_weather?.map(
    (dayForecast) => ({
      date: new Date(dayForecast?.applicable_date).toLocaleDateString(),
      humidity: dayForecast.humidity,
      maxTemp: Math.round(Number(dayForecast?.max_temp) * 10) / 10,
      minTemp: Math.round(Number(dayForecast?.min_temp) * 10) / 10,
      theTemp: Math.round(Number(dayForecast?.the_temp) * 10) / 10,
      weatherStateAbbr: dayForecast?.weather_state_abbr,
      weatherStateName: dayForecast?.weather_state_name,
      windSpeed: Math.round(Number(dayForecast?.wind_speed) * 10) / 10,
    })
  ),
  sunrise: new Date(initialForecast?.sun_rise).toLocaleString(),
  sunset: new Date(initialForecast?.sun_set).toLocaleString(),
  time: new Date(initialForecast?.time).toLocaleString(),
  title: initialForecast?.title,
});
