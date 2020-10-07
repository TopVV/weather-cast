import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { ReactElement } from "react";

interface TodayForecastProps {
  fetchType: string;
  sunrise: string;
  sunset: string;
  title: string;
}

const TodayForecast = ({
  fetchType,
  sunrise,
  sunset,
  title,
}: TodayForecastProps): ReactElement => (
  <Card className="text-center">
    <Card.Header>{fetchType}</Card.Header>
    <Card.Body>
      <Card.Title>{title} Forecast</Card.Title>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Today Sunrise Time {sunrise}</ListGroupItem>
        <ListGroupItem>Today Sunset Time {sunset}</ListGroupItem>
      </ListGroup>
    </Card.Body>
    <Card.Footer className="text-muted" />
  </Card>
);
export default TodayForecast;
