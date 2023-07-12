import React from 'react'
import styled from "styled-components";
import intro_img from "../images/illustration-intro.png";
import { devices } from '../devices';
import bg_desktop_curve from "../images/bg-curvy-desktop.svg";
import bg_mobile_curve from "../images/bg-curvy-mobile.svg";




// border: 1px solid white;
const IntroContainer = styled.section`
position: relative;
// background-image: url(${bg_desktop_curve});
// background-repeat: no-repeat;
// background-position: bottom;
// background-size: 100% 20%;
border: 1px solid var(--main-bg);

`

const IntroContents = styled.div`
   max-width: 652px;
   margin: 0 auto;
   text-align: center;
   
//    background-color: transparent;
   
//    & * {
//     background-color: transparent;
//    }

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
   background-image: url(${bg_mobile_curve});
   background-repeat: no-repeat;
   background-position: 100% 100%;
   background-size: 100% 50%; 
   object-fit: cover;
//    background-color: blue;
   z-index: -20;

   @media ${devices.tablet} {
   background-image: url(${bg_desktop_curve});
   background-size: 100% 80%; 
//    background-color: red;

}
`


function Intro() {
    return (
        <IntroContainer className='gen-content-container'>
            <IntroBgCurve className='intro-bg-curve'></IntroBgCurve>
            <IntroContents>
                <div className='intro-image-container'>
                    <img src={intro_img} alt='intro-img' style={{ width: '100%', backgroundColor: 'transparent' }} />
                </div>
                <IntroHeading>All your files in one secure location, accessible anywhere</IntroHeading>
                <IntroPara >Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
                </IntroPara>
                <CtaButton>Get Started</CtaButton>
            </IntroContents>
        </IntroContainer>
    )
}

export default Intro