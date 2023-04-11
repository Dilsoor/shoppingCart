import React from "react";
import { useGlobalContext } from "../../Context";
import Card from "./Card";
import "./Cards.scss";

function Cards() {
  const { cart, clearCart } = useGlobalContext();
  if (cart.length == 0) {
    return (
      <div className="cart">
        <div className="container">
          <h1 className="cart-empty">Your bag is empty now!</h1>
        </div>
      </div>
    );
  } else
    return (
      <div className="container">
        <h1>YOUR BAG</h1>
        {cart.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
        <button className="btn cart-clear" onClick={() => clearCart()}>
          Clear Cart
        </button>
      </div>
    );
}

export default Cards;
