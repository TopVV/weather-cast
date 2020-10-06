export const mapInitialForecast = (initialForecast) => ({
  consolidatedWeather: initialForecast?.consolidated_weather?.map(
    (dayForecast) => ({
      date: new Date(dayForecast?.applicable_date).toLocaleDateString(),
      humidity: dayForecast.humidity,
      maxTemp: Math.round(dayForecast?.max_temp * 10) / 10,
      minTemp: Math.round(dayForecast?.min_temp * 10) / 10,
      theTemp: Math.round(dayForecast?.the_temp * 10) / 10,
      weatherStateAbbr: dayForecast?.weather_state_abbr,
      weatherStateName: dayForecast?.weather_state_name,
      windSpeed: Math.round(dayForecast?.wind_speed * 10) / 10,
    })
  ),
  sunrise: new Date(initialForecast?.sun_rise).toLocaleString(),
  sunset: new Date(initialForecast?.sun_set).toLocaleString(),
  time: new Date(initialForecast?.time).toLocaleString(),
  title: initialForecast?.title,
});
