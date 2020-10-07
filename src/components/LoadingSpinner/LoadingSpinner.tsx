import { RingLoader } from "react-spinners";
import { Jumbotron } from "react-bootstrap";
import { ReactElement } from "react";

const LoadingSpinner = (): ReactElement => {
  return (
    <Jumbotron className="d-flex justify-content-center align-items-center">
      <RingLoader />
    </Jumbotron>
  );
};

export default LoadingSpinner;
