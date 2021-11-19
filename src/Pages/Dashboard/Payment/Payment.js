import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Payment = () => {
  return (
    <Container>
      <Row>
        <h2 className="text-center fw-bold">
          Payment System Will Be Available Soon
        </h2>
        <Col xs={10} md={6} className="mx-auto my-5">
          <Image
            src="https://securionpay.com/wp-content/uploads/2016/03/How-to-define-e-payments.svg"
            rounded
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
