import React, { useState } from "react";
import { Product } from "./product";

export const Products = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const productList = [{ product: "p1" }, { product: "p2" }, { product: "p3" }];
  const addCart = (pdt) => {
    console.log("here", cart);
    let c = cart;
    c.push(pdt);
    setCart(c);
  };

  const handleShow = () => {
    setShowCart(!showCart);
  };
  return (
    <div>
      <div>Products</div>
      {productList.map((p, i) => {
        return <Product p={p} addCart={addCart} key={i} />;
      })}
      <button onClick={handleShow}> Show Cart </button>
      {showCart &&
        cart.map((c) => {
          return <div>{c}</div>;
        })}
    </div>
  );
};
