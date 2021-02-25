import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";
const controls = [
  { label: "Salid", type: "salid" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((c) => (
      <BuildControl  
        key={c.label}
        label={c.label}  />
    ))}
  </div>
);
export default buildControls;
