import * as constants from "./constants";

export const getCityForecastRequest = (cityId) => ({
  type: constants.GET_CITY_FORECAST_REQUEST,
  payload: { cityId },
});

export const getCityForecastSuccess = (cityForecast) => ({
  type: constants.GET_CITY_FORECAST_SUCCESS,
  payload: { cityForecast },
});

export const getCityForecastError = () => ({
  type: constants.GET_CITY_FORECAST_ERROR,
});
