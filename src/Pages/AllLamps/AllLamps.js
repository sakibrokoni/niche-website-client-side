import React from "react";
import { Container, Row } from "react-bootstrap";
import ShowProducts from "../ShowProducts/ShowProducts";
import useProducts from "../../hooks/useProducts";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import World from "../World/World";

const AllLamps = () => {
  const { products } = useProducts();
  // For Status Showing
  const dltBtn = false;
  return (
    <>
      <Header></Header>

      <World></World>

      <Container>
        <h2 className="text-center fw-bold mt-4 fs-1 text-dark">
          Featured <span className="text-warning"> Lamps</span>{" "}
        </h2>
        <Row xs={1} md={3} className="g-4" style={{ margin: "20px" }}>
          {products.map((product) => (
            <ShowProducts
              key={product._id}
              product={product}
              dltBtn={dltBtn}
            ></ShowProducts>
          ))}
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
};
export default AllLamps;
