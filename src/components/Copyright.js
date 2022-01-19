import React, { useState } from 'react';

const Copyright = (props) => {
    const { cpright } = props;
    return (
        <div>
            <hr></hr>
            <h5>Copyright: {cpright}</h5>
        </div>
    )
}

export default Copyright;