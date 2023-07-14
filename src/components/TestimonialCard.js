import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
max-width: 350px;
background-color: var(--testimonials-bg);
border-radius: 4px;
padding: 2em;


.description-text {
    letter-spacing: 1px;
}

.person-info {
    margin-top: 0.9em; 
    display: flex; 
    gap: 0.7em;
    align-items: center;
}
.person-info img{
    width: 28px;
    border-radius: 50%;
}

.person-info h3{
    font-size: 0.7rem;
}

.person-info p{
    font-size: 0.7rem;
}

`

const TestimonialCard = ({ name, description, profile, designation }) => {
    return (
        <CardContainer>
            <p className='description-text'>{description}</p>
            <div className='person-info'>
                <img src={profile} alt='profile' />
                <div>
                    <h3>{name}</h3>
                    <p>{designation}</p>
                </div>
            </div>
        </CardContainer>
    )
}

export default TestimonialCard