import React from 'react'
import { FeatureCard } from './FeatureCard'
import styled from "styled-components"
import { devices } from '../devices';
import { featureData } from '../appDataConfig';

const FeatureContainer = styled.section`
max-width: 864px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
flex-direction: column;
padding: 5em 1em;
gap: 3em;


@media ${devices.tablet} {
    flex-direction: row;
    padding: 3em 0;
    align-items: normal;
}
`

let delay = 50;

const Feature = () => {

    return (
        <FeatureContainer>
            {featureData.map((feature, index) => (<FeatureCard key={index}
                img={feature.img}
                title={feature.title}
                description={feature.description}
                animation={{ delay: (delay += 250).toString() }}
            />)
            )}
        </FeatureContainer>
    )
}

export default Feature