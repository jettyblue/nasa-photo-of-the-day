import React, { useState } from 'react';
import styled from 'styled-components';


const StyledDetails = styled.h4`
    color: #60485C;
    max-width: 72%;
    display: inline-block;
`


const Explanation = (props) => {
    const { text } = props;
    return (
        <StyledDetails>
            <h4>{text}</h4>
        </StyledDetails>
    )
}


export default Explanation;