import React from 'react'
import Layout from '../components/Layout'
import styled from "styled-components";

const TestContainer = styled.div`
height: 500px;
border: 1px solid white;
text-align: center;
background-color: transparent;

h1,p {
    color: black;
}

& .bg-img {
    position: absolute;
    top: 5em;
    width: 100%;
    height:50%;
    z-index: -1;
border: 1px solid red;

}
`

function Test() {
    return (
        <TestContainer className='test-container'>
            <div className='bg-img'></div>
            <h1>hello</h1>
            <p>this is some text...</p>
        </TestContainer>
    )
}

export default Test