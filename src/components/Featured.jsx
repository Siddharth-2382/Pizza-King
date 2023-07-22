import React from "react";
import FeaturedCard from "./FeaturedCard";
import featuredPizza1 from "./Images/featured_pizza_1.png";
import featuredPizza2 from "./Images/featured_pizza_2.png";
import featuredPizza3 from "./Images/featured_pizza_3.png";

function Featured() {
  return (
    <div className="featured-container">
      <div className="curve-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          fill="none"
        >
          <path
            fill="#121212"
            fill-opacity="1"
            d="M0,128L80,122.7C160,117,320,107,480,128C640,149,800,203,960,197.3C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="featured-items">
        <h1>Featured Pizzas</h1>
        <div className="card-container">
          <FeaturedCard
            itemName="Mexican Fiesta"
            itemDescription="Jalapeños, green capsicum, olives, pepperoni, and mozzarella cheese."
            imgSource={featuredPizza1}
          />
          <FeaturedCard
            itemName="Classic Margherita"
            itemDescription="Fresh basil, tomatoes, garlic, and mozzarella cheese on a thin crust."
            imgSource={featuredPizza2}
          />
          <FeaturedCard
            itemName="Pepperoni  Paradise"
            itemDescription="A pizza that goes all out with an abundance of pepperoni, ensuring every bite is packed with flavour."
            imgSource={featuredPizza3}
          />
        </div>
      </div>
    </div>
  );
}

export default Featured;
