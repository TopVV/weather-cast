import { GET_CITY_FORECAST_SUCCESS } from "./constants";
import Immutable from "immutable";
import { ActionTypes } from "./actions";

const initialState = Immutable.Map({
  currentCityForecast: {},
  isLoading: true,
});

const reducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case GET_CITY_FORECAST_SUCCESS: {
      return state.merge({
        currentCityForecast: action.payload.cityForecast,
        isLoading: false,
      });
    }
    default: {
      return state;
    }
  }
};

export { initialState };

export default reducer;
