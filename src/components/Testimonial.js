import React from 'react'
import styled from "styled-components";
import { testimonilaData } from '../appData';
import TestimonialCard from './TestimonialCard';
import { devices } from "../devices";
import bg_quotes from "../images/bg-quotes.png";


const TestimonialContainer = styled.section`
width: fit-content;
display: flex;
flex-direction: column;
align-items: center;
gap: 1em;
margin: 0 auto;
padding: 4em 1em;
background-image: url(${bg_quotes});
background-repeat: no-repeat;
background-position: 2% 0%;

@media ${devices.tablet} {
    flex-direction: row;
    justify-content: center;
background-position: 0.3% 7.1%;
}
`

const Testimonial = () => {
    return (

        <TestimonialContainer>
            {
                testimonilaData.map(info => (<TestimonialCard
                    name={info.name}
                    description={info.description}
                    profile={info.profile}
                    designation={info.designation}
                />))
            }
        </TestimonialContainer>
    )
}

export default Testimonial