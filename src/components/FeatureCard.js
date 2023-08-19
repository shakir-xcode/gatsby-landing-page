import Aos from 'aos'
import React, { useEffect } from 'react'
import styled from "styled-components"
import { DURATION } from '../appDataConfig'

const FeatureCardContainer = styled.div`
max-width: 360px;
display: flex;
flex-direction: column;
gap: 1em;
align-items: center;
text-align: center;

 
.feature-img-container {
    margin: 0em auto;
    width: 64px;
    height: 64px;
}

.feature-img-containe img{
    object-fit: cover;
}

h1 {
    margin-top: 1em;
    font-size: 1.3rem;
    font-weight: 600;
}

p {
    font-size: 0.9rem;
}

`

export const FeatureCard = ({ img, title, description, animation }) => {
    useEffect(() => {
        Aos.init({ duration: DURATION })
    }, [])

    return (
        <div data-aos='zoom-in' data-aos-delay={animation.delay || '0'}>
            <FeatureCardContainer>
                <div className='feature-img-container'>
                    <img src={img} alt='feature-img' />
                </div>

                <h1>{title}</h1>
                <p>{description}</p>
            </FeatureCardContainer>
        </div>

    )
}