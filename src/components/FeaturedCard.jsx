import React from "react";
import Button from "./Button";

function FeaturedCard(props) {
  return (
    <div className="card">
      <img src={props.imgSource} alt="featured pizza" />
      <h2>{props.itemName}</h2>
      <p>
        {props.itemDescription.length > 63
          ? props.itemDescription.substring(0, 62) + "..."
          : props.itemDescription}
      </p>
      <Button class="btn btn-primary btn-md" name="ORDER NOW" />
    </div>
  );
}

export default FeaturedCard;
