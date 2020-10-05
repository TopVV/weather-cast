import Head from "next/head";
import styles from "../styles/FirstPage.module.css";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

export default function FirstPage({ data }) {
  const cityInformation = {
    consolidatedWeather: data.consolidated_weather.map((dayForecast) => ({
      date: new Date(dayForecast.applicable_date).toLocaleDateString(),
      humidity: dayForecast.humidity,
      maxTemp: Math.round(dayForecast.max_temp * 10) / 10,
      minTemp: Math.round(dayForecast.min_temp * 10) / 10,
      theTemp: Math.round(dayForecast.the_temp * 10) / 10,
      weatherStateAbbr: dayForecast.weather_state_abbr,
      weatherStateName: dayForecast.weather_state_name,
      windSpeed: Math.round(dayForecast.wind_speed * 10) / 10,
    })),
    sunrise: new Date(data.sun_rise).toLocaleString(),
    sunset: new Date(data.sun_set).toLocaleString(),
    time: new Date(data.time).toLocaleString(),
    title: data.title,
  };

  // sn
  // 	sl
  // 	h
  // 	t
  // 	hr
  // 	lr
  // 	s
  // hc
  // 	lc
  // c
  // woeid: 44418

  // https://www.metaweather.com/static/img/weather/lc.svg

  return (
    <div>
      <Head>
        <title>First-Page SSR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card className="text-center">
        <Card.Header />
        <Card.Body>
          <Card.Title>{cityInformation.title} Forecast</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Today Sunrise Time {cityInformation.sunrise}
            </ListGroupItem>
            <ListGroupItem>
              Today Sunset Time {cityInformation.sunset}
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="text-muted" />
      </Card>
      <div className="week-forecast d-flex ">
        {cityInformation.consolidatedWeather.map((dayForecast, idx) => {
          if (idx === 0) {
            return null;
          }
          return (
            <Card
              style={{ width: "18rem" }}
              className="m-4"
              key={dayForecast.date}
            >
              <Card.Header>Forecast for {dayForecast.date}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Current Temperature {dayForecast.theTemp}°C
                </ListGroup.Item>
                <ListGroup.Item>
                  Max Temperature {dayForecast.maxTemp}°C
                </ListGroup.Item>
                <ListGroup.Item>
                  Max Temperature {dayForecast.minTemp}°C
                </ListGroup.Item>
                <ListGroup.Item>
                  Current Weather State is {dayForecast.weatherStateName}
                </ListGroup.Item>
                <ListGroup.Item>
                  Wind Speed is {dayForecast.windSpeed} mph
                </ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card>
          );
        })}
      </div>
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
