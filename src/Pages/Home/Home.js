import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import ShowProducts from "../ShowProducts/ShowProducts";
import useProducts from "../../hooks/useProducts";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Review from "../Review/Review";
import Collection from "../Collection/Collection";
import World from "../World/World";

const Home = () => {
  const { products } = useProducts();
  return (
    <>
      <Header />
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="" />
          <Carousel.Caption>
            <h3 className="text-center fw-bold">
              {" "}
              <span className="text-dark">“LAMPS LAND” </span>
              <br />
              <span className="text-light">
                The Eco-Friendly Lighting Solution{" "}
              </span>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="" />
          <Carousel.Caption>
            <h3 className="text-center fw-bold">
              <span className="text-success">“LAMPS LAND”</span>
              <br />
              The future of Advance lighting
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <h2 className="text-center fw-bold mt-4 fs-1 text-dark">
          Special offers & <span className="text-warning"> Products</span>{" "}
        </h2>
        <Row xs={1} md={3} className="g-4" style={{ margin: "20px" }}>
          {products.slice(0, 6).map((product) => (
            <ShowProducts key={product._id} product={product}></ShowProducts>
          ))}
        </Row>
      </Container>

      <Container>
        <h2 className="text-center fw-bold mt-4 fs-1 text-dark">
          TOP <span className="text-warning"> REVIEW</span>{" "}
        </h2>
        <Review></Review>
      </Container>

      {/* Extra Section */}

      <World></World>

      <Collection></Collection>

      <Footer></Footer>
    </>
  );
};
export default Home;
