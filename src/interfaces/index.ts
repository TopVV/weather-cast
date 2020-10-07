export interface consolidatedWeatherInterface {
  date: string;
  theTemp: number | string;
  weatherStateName: string;
  maxTemp: number | string;
  weatherStateAbbr: string;
  humidity: string;
  windSpeed: number | string;
  minTemp: number | string;
}

export interface initConsolidatedWeatherInterface {
  applicable_date: string;
  humidity: string;
  max_temp: string;
  min_temp: string;
  the_temp: string;
  weather_state_abbr: string;
  weather_state_name: string;
  wind_speed: string;
}

export interface ForecastDataInterface {
  consolidatedWeather: consolidatedWeatherInterface[];
  sunrise: string;
  sunset: string;
  time: string;
  title: string;
}

export interface InitForecastDataInterface {
  consolidated_weather: initConsolidatedWeatherInterface[];
  applicable_date: string;
  sun_rise: string;
  sun_set: string;
  time: string;
  title: string;
}
