import React from "react";
import { useState } from "react";

function Testimonials() {
  const [translateX, setTranslateX] = useState(0);

  const handleRadioChange = (event) => {
    const value = event.target.value;
    const translateXValue = value === "2" ? -100 : value === "3" ? -200 : 0;
    setTranslateX(translateXValue);
  };
  return (
    <div className="testimonial-container">
      <div>
        <h1 className="testimonial-title">
          Happy Customers Around the Globe
          <span>More than 1 Million Users Served Till Date</span>
        </h1>
      </div>
      <div className="carousel-container">
        <div
          className="carousel-item"
          style={{ transform: `translateX(${translateX}%)` }}
        >
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
        <div
          className="carousel-item"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          <div className="testimonial">
            <p>
              I've been a loyal customer of Pizza King for years, and they never
              disappoint. Their pizzas are consistently delicious and made with
              high-quality ingredients. The variety of toppings and specialty
              options always keep me coming back for more. Whether dining in or
              ordering for delivery, Pizza King is my number one choice for a
              pizza feast!
            </p>
            <span>- Mark T</span>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          <div className="testimonial">
            <p>
              Pizza King is hands down the best pizza place in town! Their
              attention to detail, from the perfectly balanced flavors to the
              generous toppings, is what sets them apart. The staff is friendly
              and always provides excellent service. I've tried many pizzas in
              my life, but Pizza King truly reigns supreme. You won't find a
              better pizza anywhere else!
            </p>
            <span>- Emily S</span>
          </div>
        </div>
      </div>
      <div className="custom">
        <label className="container">
          <input
            type="radio"
            name="radio"
            value="1"
            onChange={handleRadioChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <input
            type="radio"
            name="radio"
            value="2"
            onChange={handleRadioChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          <input
            type="radio"
            name="radio"
            value="3"
            onChange={handleRadioChange}
          />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
}

export default Testimonials;
