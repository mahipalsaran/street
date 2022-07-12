import React from "react";

export const Product = (props) => {
  const handleClick = () => {
    props.addCart(props.p.product);
  };
  return (
    <div>
      {props.p.product}
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
};
