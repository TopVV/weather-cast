import { Card, ListGroup } from "react-bootstrap";
import { ReactElement } from "react";
import { consolidatedWeatherInterface } from "../../interfaces";

interface WeekForecastProps {
  consolidatedWeather: consolidatedWeatherInterface[];
}

const WeekForecast = ({
  consolidatedWeather,
}: WeekForecastProps): ReactElement => (
  <div className="week-forecast d-flex ">
    {consolidatedWeather?.map((dayForecast, idx) => {
      if (idx === 0) {
        return null;
      }
      return (
        <Card style={{ width: "18rem" }} className="m-4" key={dayForecast.date}>
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
          </ListGroup>
        </Card>
      );
    })}
  </div>
);

export default WeekForecast;
