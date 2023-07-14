import React from 'react'
import logo from "../images/logo.svg";
import styled from "styled-components";
import location_icon from "../images/icon-location.svg";
import phone_icon from "../images/icon-phone.svg";
import mail_icon from "../images/icon-email.svg";
import profile from "../images/profile-1.jpg";
import { devices } from '../devices';

const FooterContainer = styled.footer`
padding: 5em 5em;
background-color: var(--footer-bg);

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

.contact-info {
    display: flex;
    gap: 0.8em;
    margin: 1em 0;
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

.gen-text p{
    font-size: 1.2rem;
}

.social-icons-container {
    display: flex;
    gap:0.7em;
}

.social-icons{
    width: 28px;
    object-fit: cover;
    border-radius: 50%;
}

@media ${devices.mobileL} {
    .footer-content {
        flex-direction: row; 
    }
}
`

export default function Footer() {
    return (
        <FooterContainer>
            <div className='logo-icon'>
                <img src={logo} alt='logo' />
            </div>

            <div className='footer-content'>
                <div className='location-desc'>
                    <img src={location_icon} alt="location-icon" />
                    <p>Lorem ipsum dolor sit amet consectetur adipis odit esse excepturi doloremque ipsam consectetur eligendi mollitia itaque unde exercitationem expedita ex laudantium labore? Aut vel eius  ratione.</p>
                </div>

                <div>
                    <div className='contact-info'>
                        <img src={phone_icon} alt='phone-icon' className='info-icons' />
                        <p>+1-543-123-4567</p>
                    </div>

                    <div className='contact-info'>
                        <img src={mail_icon} alt='mail-icon' className='info-icons' />
                        <p>example@fylo.com</p>
                    </div>
                </div>

                <div className='about-us gen-text'>
                    <p>About Us</p>
                    <p>Jobs</p>
                    <p>Press</p>
                    <p>Blog</p>
                </div>
                <div className='gen-text'>
                    <p>Contact Us</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                </div>

                <div className='social-icons-container'>
                    <img src={profile} alt='facebook-icon' className='social-icons' />
                    <img src={profile} alt='twitter-icon' className='social-icons' />
                    <img src={profile} alt='instagram-icon' className='social-icons' />
                </div>
            </div>
        </FooterContainer>
    )
}
