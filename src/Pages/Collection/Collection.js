import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import image1 from "../images/C/c1.jpg";
import image2 from "../images/C/c2.jpg";
import image3 from "../images/C/c3.jpg";
import image4 from "../images/C/c4.jpg";
import image5 from "../images/C/c5.jpg";
import image6 from "../images/C/c6.jpg";

const Collection = () => {
  return (
    <div
      className="container p-5 my-5 rounded"
      style={{ backgroundColor: "#FFFFF0" }}
    >
      {/* Collection */}
      <h1 className="text-center fw-bold">
        Our <span className="text-warning">Categories</span>
      </h1>
      <h5>
        Our exclusive collaborations offer products by distinctive designers
        made in the Currey way.
      </h5>

      <div className="container my-5">
        <Row xs={1} md={3} className="g-4 ">
         
          {/* 1st Collection  */}

          <Col>
            <Card
              style={{ border: "none" }}
              className="card h-90 shadow p-3 mb-5 bg-body rounded"
            >
              <Card.Img
                variant="top"
                src={image1}
                style={{ height: "300px", borderRadius: "5px" }}
              />
              <Card.Body>
                <Card.Title> Desk Lamp </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* 2nd Collection  */}

          <Col>
            <Card
              style={{ border: "none" }}
              className="card h-90 shadow p-3 mb-5 bg-body rounded"
            >
              <Card.Img
                variant="top"
                src={image2}
                style={{ height: "300px", borderRadius: "5px" }}
              />
              <Card.Body>
                <Card.Title> Table Lamp</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* 3rd Collection  */}

          <Col>
            <Card
              style={{ border: "none" }}
              className="card h-90 shadow p-3 mb-5 bg-body rounded"
            >
              <Card.Img
                variant="top"
                src={image3}
                style={{ height: "300px", borderRadius: "5px" }}
              />
              <Card.Body>
                <Card.Title> Floor Lamp </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* 4th Collection  */}

          <Col>
            <Card
              style={{ border: "none" }}
              className="card h-90 shadow p-3 mb-5 bg-body rounded"
            >
              <Card.Img
                variant="top"
                src={image4}
                style={{ height: "300px", borderRadius: "5px" }}
              />
              <Card.Body>
                <Card.Title> Outdoor Light</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* 5th Collection  */}

          <Col>
            <Card
              style={{ border: "none" }}
              className="card h-90 shadow p-3 mb-5 bg-body rounded"
            >
              <Card.Img
                variant="top"
                src={image5}
                style={{ height: "300px", borderRadius: "5px" }}
              />
              <Card.Body>
                <Card.Title> Indoor Light </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* 6th Collection  */}

          <Col>
            <Card
              className="card h-90 shadow p-3 mb-5 bg-body rounded"
              style={{ border: "none" }}
            >
              <Card.Img
                variant="top"
                src={image6}
                style={{ height: "300px", borderRadius: "5px" }}
              />
              <Card.Body>
                <Card.Title> Wall Mount Light</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Collection;
