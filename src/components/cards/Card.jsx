import React from "react";
import { useGlobalContext } from "../../Context";

function Card({ id, title, price, img, amount }) {
  const { removeItem, increment, decrement } = useGlobalContext();
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt="asdf" />
      </div>
      <div className="text">
        <p>
          <b>{title}</b>
        </p>
        <p>${price}</p>
        <button onClick={() => removeItem(id)}>remove</button>
      </div>
      <div className="counts">
        <button onClick={() => increment(id)}>
          <i className="uil uil-arrow-circle-up"></i>
        </button>
        <span>{amount}</span>
        <button onClick={() => decrement(id)}>
          <i className="uil uil-arrow-circle-down"></i>
        </button>
      </div>
    </div>
  );
}

export default Card;
