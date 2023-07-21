import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <>
      <div className="hero-section">
        <div>
          <h1 className="hero-title">Indulge in Royal Pizzas,</h1>
          <h1 className="hero-title">
            Fit for a king at <span className="brand-name">Pizza King</span>
          </h1>
          <p className="hero-tagline">
            Ruling the Pizza Game with Unmatched Flavour and Quality, since 2020
          </p>
          <div className="cta">
            <Button class="btn btn-primary btn-lg" name="ORDER NOW" />
            <Button class="btn btn-secondary btn-lg" name="VIEW MENU" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
