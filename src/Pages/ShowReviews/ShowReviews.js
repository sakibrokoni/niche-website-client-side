import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import Rating from "react-rating";

const ShowReviews = (props) => {
  const { name, details, rating } = props.review;
  return (
    <Container>
      <Col className="h-100 ">
        <Card variant=" mx-auto " className="h-100 w-75 card-shadow">
          <Card.Body>
            <Card.Title>
              {" "}
              <strong className="fw-bold">{name}</strong>
            </Card.Title>

            <Card.Text>
              {" "}
              <span className="text-muted">{details}</span>{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer className=" d-flex justify-content-between align-items-center">
            <span>
              <Rating
                className="text-warning"
                initialRating={rating}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly
              ></Rating>
              <strong> ({rating})</strong>
            </span>
          </Card.Footer>
        </Card>
      </Col>
    </Container>
  );
};

export default ShowReviews;
