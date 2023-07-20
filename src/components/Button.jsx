import React from "react";

function Button(props) {
  return <button className={props.class}>{props.name}</button>;
}

export default Button;
