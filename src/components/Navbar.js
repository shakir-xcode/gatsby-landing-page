import React from 'react'
import logo from "../images/logo.svg"
import logo_light from "../images/logo-light.svg"
import styled from "styled-components"
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const NavbarContainer = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2em;

.theme-toggle-button {
    width: 2.3em;
    height: 2.3em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    border: 1px solid ${props => props.theme.footer_bg};
    background-color: transparent;
    border-radius: 50%;
}
`

const Logo = styled.div`
width: 94px;
`

function Navbar({ themeToggle, darkTheme }) {

    const toggleTheme = () => {
        themeToggle();
    }

    return (
        <NavbarContainer className='navbar-container' dark={darkTheme.toString()}>
            <Logo className='logo'>
                <img src={darkTheme ? logo_light : logo} alt='logo' style={{ width: '100%' }} />
            </Logo>
            <button className='theme-toggle-button' onClick={toggleTheme}>
                {darkTheme ? <MdOutlineLightMode color='white' size={22} /> : <MdOutlineDarkMode size={22} />}
            </button>
        </NavbarContainer>
    )
}

export default Navbar