import React from "react";
const Char = (props) => {
  return (
    <div>
      <div>{props.Character}</div>
      <button onClick={props.click}>Delete</button>
    </div>
  );
};

export default Char;
