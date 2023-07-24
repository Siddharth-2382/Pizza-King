import React from "react";

function Testimonials() {
  return (
    <div className="testimonial-container">
      <div>
        <h1 className="testimonial-title">
          Happy Customers Around the Globe
          <span>More than 1 Million Users Served Till Date</span>
        </h1>
      </div>
      <div className="carousel-container">
        <div className="carousel-item">
          <div className="testimonial">
            <p>
              Pizza King never fails to impress me with their mouthwatering
              pizzas! The crust is always perfectly crispy, the toppings are
              fresh and flavourful, and the cheese is gooey perfection. It's my
              go-to place for pizza cravings, and I highly recommend trying
              their signature Pizza King Special. You won't be disappointed!
            </p>
            <span>- Sarah L</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
