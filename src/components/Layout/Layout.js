import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import classes from "./Layout.module.css";

export default props => {
  return (
    <div className={classes.Layout}>
      <Toolbar />
      <main>{props.children}</main>
    </div>
  );
};
