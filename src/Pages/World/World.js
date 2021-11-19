import React from "react";

const World = () => {
  return (
    <div class="my-5 px-5 mx-auto">
      <h1 className="text-center fw-bold">
        <span  className="text-warning">The Best & Most Beautiful </span> <br/> <span className="text-success"> Desk Lamps in The World</span>
      </h1>
      <br />

      <div class="g-3 row row-cols-lg-2 row-cols-sm-1 row-cols-1">
        <div class="col">
          <img
            src="https://wornsimple.com/wp-content/uploads/2021/09/naugatuck-desk-lamp.jpg.webp"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="d-flex flex-column justify-content-center col">
          <h2>Naugatuck 18.5″ Desk Lamp</h2>
          <p class="text-muted">
            Many of us spend thousands of hours sitting at a desk. Whether it’s
            at home, your home office or in a garish workplace devoid of any
            sense of design or aesthetics. But your desk, table, or bedside
            doesn’t have to be an ordinary space. It can be easily transformed
            into a place of beauty and just the right type of ambiance you’ll
            actually want to be bathed in by simply adding the right desk lamp.
          </p>
        </div>
      </div>
      <br />
      <div class="g-3 row row-cols-lg-2 row-cols-sm-1 row-cols-1">
        <div class="d-flex flex-column justify-content-center col">
          <h2>Pablo Designs – Contour Table Lamp</h2>
          <p class="text-muted">
            And now we arrive at what is possibly my most cherished table/desk
            lamp on this list. From Pablo Designs, this is the Contour Table
            Lamp. When looking at it, the first question you might be asking
            yourself is… where is the bulb? It’s cleverly hidden warm LED is
            hidden within the frame of the lamp at the top which helps the lamp
            maintain its remarkably slender profile. Available in a variety of
            premium wooden and material finishes, this lamp is a perfect and
            inviting place to rest your books, precious objects or for charging
            your mobile device with integrated USB-A port. It’s not exactly
            cheap, but well worth the price. And the bonus is that the Contour
            line of lamps is also available in two other larger sizes for all of
            your lighting decor needs.
          </p>
        </div>

        <div class="col">
          <img
            src="https://wornsimple.com/wp-content/uploads/2021/09/pablog-designs-contour.jpg"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default World;
