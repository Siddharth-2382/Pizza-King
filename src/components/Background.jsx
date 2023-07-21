import React from "react";
import backgroundPizza from "./Images/back.png";

function Background() {
  return (
    <div>
      <img
        className="background-pizza"
        src={backgroundPizza}
        alt="Background Pizza"
      />
    </div>
  );
}

export default Background;
