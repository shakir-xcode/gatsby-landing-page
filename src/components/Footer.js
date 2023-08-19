import React from 'react'
import logo from "../images/logo.svg";
import logo_light from "../images/logo-light.svg";
import styled from "styled-components";
import location_icon from "../images/icon-location.svg";
import phone_icon from "../images/icon-phone.svg";
import mail_icon from "../images/icon-email.svg";


import location_icon_light from "../images/icon-location-light.svg";
import phone_icon_light from "../images/icon-phone-light.svg";
import mail_icon_light from "../images/icon-email-light.svg";

import { CiFacebook, } from "react-icons/ci";
import { RxInstagramLogo } from "react-icons/rx";
import { LiaTwitter } from "react-icons/lia";
import { devices } from '../devices';
import { Link } from 'gatsby';

const FooterContainer = styled.footer`
position: relative;
padding: 5em 5em;
background-color: ${props => props.theme.footer_bg};
overflow: hidden;

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 2em;
}

.logo-icon {
    width: 104px;
    margin: 2em 0;
}
.logo-icon img {
    width: 100%;
    object-fit: cover;
}

.location-desc {
    max-width: 340px;
    display: flex;
    gap: 0.8em;
}

.location-desc img {
    width: 68px;
    align-self: start;
    margin-top: 0.5em;
}

.contact-info-container {
    display: flex;
    flex-direction: column;
    gap: 1.2em;
    margin-top: -1em;
}

.contact-info {
    display: flex;
    gap: 0.8em;
    align-items: center;
    flex-wrap: wrap;
}

.contact-info {
    font-size: 1rem;
}

.info-icons {
    width: 18px;
}

.gen-text {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}

.gen-text a{
    font-size: 1rem;
}

.social-icons-container {
    display: flex;
    gap:0.7em;
    align-self: center;
}

@media ${devices.tablet} {
    .footer-content {
        flex-direction: row; 
    }

    .social-icons-container {
        align-self: start;
    }

    .contact-info-container {
        margin-top: 0em;
    }
}

`

export default function Footer({ darkTheme }) {

    return (
        <FooterContainer>
            <div className='logo-icon'>
                <img src={darkTheme ? logo_light : logo} alt='logo' />
            </div>

            <div className='footer-content'>
                <div className='location-desc'>
                    <img src={darkTheme ? location_icon_light : location_icon} alt="location-icon" />
                    <p>Lorem ipsum dolor sit amet consectetur adipis odit esse excepturi doloremque ipsam consectetur eligendi mollitia itaque unde exercitationem expedita ex laudantium labore? Aut vel eius  ratione.</p>
                </div>

                <div className='contact-info-container'>
                    <div className='contact-info'>
                        <img src={darkTheme ? phone_icon_light : phone_icon} alt='phone-icon' className='info-icons' />
                        <p>+1-543-123-4567</p>
                    </div>

                    <div className='contact-info'>
                        <img src={darkTheme ? mail_icon_light : mail_icon} alt='mail-icon' className='info-icons' />
                        <p>example@fylo.com</p>
                    </div>
                </div>

                <div className='gen-text'>
                    <Link to="#">About Us</Link>
                    <Link to="#">Jobs</Link>
                    <Link to="#">Press</Link>
                    <Link to="#">Blog</Link>
                </div>
                <div className='gen-text'>
                    <Link to="#">Contact Us</Link>
                    <Link to="#">Terms</Link>
                    <Link to="#">Privacy</Link>
                </div>

                <div className='social-icons-container'>
                    <Link to="#"><CiFacebook size={28} className='social-icons' /></Link>
                    <Link to="#"><RxInstagramLogo size={28} className='social-icons' /></Link>
                    <Link to="#"><LiaTwitter size={28} className='social-icons' /></Link>
                </div>
            </div>
        </FooterContainer>
    )
}
