import React from "react";
import styles from "./OrderSummary.module.css";

export default props => {
  const order = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <div>
      <h1>Your Order</h1>
      <h3>Following ingredients of your delicious Burger</h3>
      <ul>{order}</ul>
      <p>
        <strong>Total price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <button className={styles.Success} onClick={props.continue}>
        CONTINUE
      </button>
      <button className={styles.Danger} onClick={props.cancel}>
        CANCEL
      </button>
    </div>
  );
};
