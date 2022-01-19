import React, { useState } from 'react';

const Explanation = (props) => {
    const { expl } = props;
    return (
        <div>
            <h3>{expl}</h3>
        </div>
    )
}


export default Explanation;