import React from "react";
const UserInput = (props) => {

    const styles = {
        backgroundColor: 'red',
        border: '1px solid black'
    }
  return (
    <div>
      <input
        style={styles}
        type="text"
        onChange={props.changed}
        value={props.username}
      />
    </div>
  );
};

export default UserInput;
