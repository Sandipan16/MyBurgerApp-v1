import React from "react";
import burgerLogo from "../../assets/Images/original.png";
import classes from "./Logo.module.css";

export default props => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};
