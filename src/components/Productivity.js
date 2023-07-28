import React, { useEffect } from 'react'
import styled from "styled-components";
import illustration_productivity from "../images/illustration-stay-productive.png";
import { Link } from 'gatsby';
import arrow_icon from "../images/icon-arrow.svg"
import { devices } from '../devices';
import Aos from 'aos';
import { DURATION } from '../appDataConfig';

const ProductivityContainer = styled.section`
display: flex;
gap: 3em;
justify-content: center;
align-items: center;
flex-wrap: wrap;
padding: 5em 1em;

.productivity-illustration {
    max-width: 450px;
}

.productivity-illustration img {
    width: 100%;
    object-fit: cover;
}

.productivity-text-section {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: start;
}

.productivity-text-section h1 {
    font-size: 1.1rem;
    font-weight: 600;
}
.productivity-text-section p {
    font-size: 0.9rem;
    line-height: 1.3rem;
}

.productivity-text-section a{
    color: var(--accent-cyan);
}


.link-fylo {
    display: flex;
    justify-content: start;
    gap: 5px;
    align-items: center;
    padding: 2px 0;
    border-bottom: 1px solid var(--accent-cyan);
}

.link-fylo img {
    width: 16px;
}

@media ${devices.mobileL} {
    .productivity-text-section h1 {
        font-size: 2rem;
    }

@media ${devices.tablet} {
    .productivity-text-section h1 {
        font-size: 2.4rem;
    }
}

`

const Productivity = () => {

    useEffect(() => {
        Aos.init({ duration: DURATION })
    }, [])
    return (
        <ProductivityContainer>
            <div className='productivity-illustration'>
                <img src={illustration_productivity} alt='productivity illustration' />
            </div>
            <div className='productivity-text-section' data-aos='zoom-in' >
                <h1>Stay productive,<br />wherever you are</h1>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>

                <div className='link-fylo'>
                    <Link to="#">See how Fylo works</Link>
                    <img src={arrow_icon} alt='arrow' />
                </div>

            </div>
        </ProductivityContainer>
    )
}

export default Productivity