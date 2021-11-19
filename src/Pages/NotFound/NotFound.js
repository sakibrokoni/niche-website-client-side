import { Card, NavLink, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import image11 from "../images/C/eerror.png";

const NotFound = () => {
  return (
    <Card className="text-center " bg="dark">
      <Card.Img className="w-70 mx-auto my-0" variant="top" src={image11} />
      <Card.Body>
        <Card.Title className="text-white">
          You are lost in the Error World!
        </Card.Title>
        <NavLink as={Link} to="/">
          <Button variant="danger">Go Back</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default NotFound;
