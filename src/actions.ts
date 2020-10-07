import * as constants from "./constants";
import { ForecastDataInterface } from "./interfaces";

// interface getCityForecastRequest {
//   type: string;
//   payload: { cityId: number | string };
// }

interface getCityForecastSuccessInterface {
  type: string;
  payload: { cityForecast: ForecastDataInterface };
}

// export const getCityForecastRequest = (
//   cityId: number | string
// ): getCityForecastRequest => ({
//   type: constants.GET_CITY_FORECAST_REQUEST,
//   payload: { cityId },
// });

export const getCityForecastSuccess = (
  cityForecast: ForecastDataInterface
): getCityForecastSuccessInterface => ({
  type: constants.GET_CITY_FORECAST_SUCCESS,
  payload: { cityForecast },
});

// export const getCityForecastError = () => ({
//   type: constants.GET_CITY_FORECAST_ERROR,
// });

export type ActionTypes = getCityForecastSuccessInterface;
