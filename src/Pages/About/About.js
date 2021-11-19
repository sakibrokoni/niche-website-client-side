import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Vision from "../Vision/Vision";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header></Header>

      <div className="my-5 px-5 mx-auto">
        <div className="g-3 row row-cols-lg-2 row-cols-sm-1 row-cols-1">
          <div className="col">
            <img
              src="https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFtcHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              class="img-fluid"
              alt=""
            />
          </div>
          <div className="d-flex flex-column justify-content-center col">
            <h5 className="text-success">About Lamps-Land</h5>
            <h3>The Best Lamp Services Company</h3>
            <p className="text-muted">
              Currey & Company is a wholesale manufacturer of distinctive home
              furnishings, including lighting, furniture and accent pieces. Our
              reputation for innovative furnishings spans the residential,
              contract and hospitality spaces, and Currey products are found in
              interiors around the world.Our vision, to create distinctive home
              furnishings, has never wavered. Our mission, to serve our
              customers, owners and employees in an exemplary manner while
              nurturing a culture that encourages all to flourish, has remained
              steadfast for 30 years.
            </p>
           
           <Link to="/contact"> <Button variant="outline-success">Contact</Button> </Link>
          </div>
        </div>
        <Vision></Vision>
      </div>

      <Footer></Footer>
    </>
  );
};

export default About;
