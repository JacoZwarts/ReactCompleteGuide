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
    <p>Current Price: ${props.totalPrice.toFixed(2)}</p>
    {controls.map((c) => (
      <BuildControl  
        key={c.label}
        label={c.label} 
        added={() => props.addIngredient(c.type)}
        remove={()=> props.removeIngredient(c.type)}
        disabled={props.disabled[c.type]} />
    ))}
    <button className={classes.OrderButton}
    disabled={!props.purchaseable}>ORDER NOW</button>
  </div>
);
export default buildControls;
