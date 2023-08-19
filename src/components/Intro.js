import React from 'react'
import styled from "styled-components";
import intro_img from "../images/illustration-intro.png";
import { devices } from '../devices';
import bg_desktop_curve from "../images/bg-curvy-desktop.svg";
import bg_mobile_curve from "../images/bg-curvy-mobile.svg";
import bg_desktop_curve_light from "../images/bg-curvy-desktop-light.svg";
import bg_mobile_curve_light from "../images/bg-curvy-mobile-light.svg";

const IntroContainer = styled.section`
position: relative;
padding: 1px 0;
`

const IntroContents = styled.div`
   max-width: 652px;
   margin: 0 auto;
   text-align: center;

   .intro-image-container {
    margin: 0 auto;
   }

   @media ${devices.mobileL} {
        .intro-image-container {
            max-width: 500px;
        }
    }

    @media ${devices.tablet} {
        margin: 7em auto 11em auto;

        .intro-image-container {
            max-width: 100%;
        }
    }

`
const IntroHeading = styled.h2`
margin: 1em auto;
font-size: 1.3rem;
font-weight: 600;

@media ${devices.mobileL} {
    padding: 0 1em;
    font-size: 1.7rem
}

@media ${devices.tablet} {
    padding: 0;
    font-size: 2.2rem;
}

`
const IntroPara = styled.p`
margin: 1em auto;
padding: 0 1em;
font-size: 0.9rem;

@media ${devices.mobileL} {
    font-size: 1.1rem;
    padding: 0 3em;
}
`

const CtaButton = styled.button`
margin-top: 1.5em;
padding: 12px 42px;
font-weight: 900;
background-color: var(--accent-blue);
border: none;
border-radius: 24px;

&:hover{
    background-color: var(--accent-cyan);
}

@media ${devices.mobileM} {
    padding: 15px 72px;
}
`
const IntroBgCurve = styled.div`
   position: absolute;
   bottom: 0;
   width: 100%;
   height: 400px;
   background-image: url(${props => props.dark === 'true' ? bg_mobile_curve : bg_mobile_curve_light});

   background-repeat: no-repeat;
   background-position: 100% 100%;
   background-size: 100% 50%; 
   object-fit: cover;
   z-index: -20;

   @media ${devices.tablet} {
   background-image: url(${props => props.dark === 'true' ? bg_desktop_curve : bg_desktop_curve_light});
   background-size: 100% 80%; 
}
`


function Intro({ darkTheme }) {
    return (
        <IntroContainer className='gen-content-container'>
            <IntroBgCurve className='intro-bg-curve' dark={darkTheme.toString()}></IntroBgCurve>
            <IntroContents>
                <div className='intro-image-container'>
                    <img src={intro_img} alt='intro-img' style={{ width: '100%', backgroundColor: 'transparent' }} />
                </div>
                <div data-aos='zoom-in' data-aos-delay='0'>
                    <IntroHeading>All your files in one secure location, accessible anywhere</IntroHeading>
                    <IntroPara >Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
                    </IntroPara>
                    <CtaButton>Get Started</CtaButton>
                </div>
            </IntroContents>
        </IntroContainer>
    )
}

export default Intro