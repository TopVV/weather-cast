import Head from "next/head";
import styles from "../styles/FirstPage.module.css";
import { mapInitialForecast } from "../src/global/helpers";
import TodayForecast from "../src/components/TodayForecast/TodayForecast";
import WeekForecast from "../src/components/WeekForecast/WeekForecast";

export default function FirstPage({ data }) {
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
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://www.metaweather.com/api/location/44418/");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
