import { RingLoader } from "react-spinners";
import { Jumbotron } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <Jumbotron className="d-flex justify-content-center align-items-center">
      <RingLoader />
    </Jumbotron>
  );
};

export default LoadingSpinner;
