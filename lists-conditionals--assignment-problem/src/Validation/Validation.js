import React from 'react';

const Validation = (props) => {
    const isValid = (length) => {
        if(length > 5) {
            return 'Text long enough.';
        }else {
            return 'Text to short.';
        }
    }

    return (<div>{isValid(props.TextLength)}</div>);
};

export default Validation;