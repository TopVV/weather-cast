import Head from "next/head";
import { mapInitialForecast } from "../src/global/helpers";
import TodayForecast from "../src/components/TodayForecast/TodayForecast";
import WeekForecast from "../src/components/WeekForecast/WeekForecast";

import { GetServerSideProps } from "next";
import { ForecastDataInterface } from "../src/interfaces";
import { ReactElement } from "react";

type FirstPageProps = {
  data: ForecastDataInterface;
};

const FirstPage = ({ data }: FirstPageProps): ReactElement => {
  const cityInformation = mapInitialForecast(data);

  return (
    <div>
      <Head>
        <title>First-Page SSR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodayForecast
        fetchType="SSR"
        sunrise={cityInformation.sunrise}
        sunset={cityInformation.sunset}
        title={cityInformation.title}
      />
      <WeekForecast consolidatedWeather={cityInformation.consolidatedWeather} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch("https://www.metaweather.com/api/location/44418/");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default FirstPage;
