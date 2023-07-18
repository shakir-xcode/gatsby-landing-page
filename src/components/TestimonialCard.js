import React, { useEffect } from 'react'
import styled from 'styled-components';
import Aos from 'aos';
import "aos/dist/aos.css";
import { DURATION } from '../appDataConfig';

// .attrs(props => ({
//     'data-aos': 'fade-up',
//     // 'data-aos-delay': props.delay || "50"
// }))`

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

const TestimonialCard = ({ description, name, designation, profile, animation }) => {


    useEffect(() => {
        Aos.init({ duration: DURATION })
    }, [])
    return (
        <div data-aos='fade-up' data-aos-delay={animation.delay || '0'} data-aos-once='true'>
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
        </div>
    )
}

export default TestimonialCard