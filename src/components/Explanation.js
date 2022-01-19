import React, { useState } from 'react';

const Explanation = (props) => {
    const { expl } = props;
    return (
        <div>
            <h4>{expl}</h4>
        </div>
    )
}


export default Explanation;