import React from 'react';

const UserOutput = (props) => {
    return (
        <div className="Card">
            <h3>User Details</h3>
            <p>Username: {props.username}</p>
            <p>Password: {props.password}</p>
        </div>);
};

export default UserOutput;