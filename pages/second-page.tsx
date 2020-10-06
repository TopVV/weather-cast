import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { mapInitialForecast } from "../src/global/helpers";
import TodayForecast from "../src/components/TodayForecast/TodayForecast";
import WeekForecast from "../src/components/WeekForecast/WeekForecast";
import forecastService from "../src/service";
import LoadingSpinner from "../src/components/LoadingSpinner/LoadingSpinner";
import { getCityForecastSuccess } from "../src/actions";

export default function FirstPage() {
  const currentForecast = useSelector((state) =>
    state.get("currentCityForecast")
  );
  const isLoading = useSelector((state) => state.get("isLoading"));
  const dispatch = useDispatch();

  const fetchAndStoreForecast = async (dispatch) => {
    const response = await forecastService.getCityForecastById();
    dispatch(getCityForecastSuccess(response?.data));
  };

  useEffect(() => {
    fetchAndStoreForecast(dispatch);
  }, []);

  const cityInformation = mapInitialForecast(currentForecast);

  return (
    <div>
      <Head>
        <title>Second-Page Redux-Flow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <TodayForecast
            fetchType="Redux-Flow"
            sunrise={cityInformation.sunrise}
            sunset={cityInformation.sunset}
            title={cityInformation.title}
          />
          <WeekForecast
            consolidatedWeather={cityInformation.consolidatedWeather}
          />
        </>
      )}
    </div>
  );
}
