import React, { useState } from 'react';

const Copyright = (props) => {
    const { cpright } = props;
    return (
        <div>
            <h3>Copyright: {cpright}</h3>
        </div>
    )
}

export default Copyright;