import React, { useState } from 'react';
import styled from 'styled-components'
import './Image.css';

const StyledPhoto = styled.div`
    /* max-width: 75%; */
    /* border-radius: 18px; */
    /* border: 3px solid black; */
    /* box-shadow: 4px 4px 8px #000000; */
    display: inline-block;
    /* object-fit: inherit; */
`

const Image = (props) => {
    const { nasaURL } = props;
    return (
        <StyledPhoto className='photo'>
            <img src={nasaURL} alt='Nasa astronomy pic'/>
        </StyledPhoto>
    )
}

export default Image;


// const StyledImg = styled.img`
//     max-width: 75%;
//     border-radius: 18px;
//     border: 3px solid black;
//     box-shadow: 4px 4px 8px #000000;