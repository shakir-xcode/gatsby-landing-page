import React from 'react'
import { Link } from "gatsby"
import logo from "../images/logo.svg"
import styled from "styled-components"
import { devices } from '../devices'


const NavbarContainer = styled.nav`
display: grid;
gap:1em;
padding: 2em;
align-items: center;

grid-template-columns: 1fr 2.5fr;

@media ${devices.mobileL} {
    grid-template-columns: 4fr 5fr;
}
@media ${devices.tablet} {
    grid-template-columns: 2fr 1fr;
}


`

const Logo = styled.div`
width: 94px;
`
const LinkContainer = styled.div`
display: flex;
gap: 0.3em;
justify-content: space-around;
box-sizing: border-box;
& a {
    font-size: 0.8rem;
}

`

function Navbar() {

    const toggleTheme = () => {

    }

    return (
        <NavbarContainer className='navbar-container'>
            <Logo className='logo'>
                <img src={logo} alt='logo' style={{ width: '100%' }} />
            </Logo>
            <LinkContainer className='link-container'>
                <Link className='nav-link-item' to="#">Feature</Link>
                <Link className='nav-link-item' to="#">Team</Link>
                <Link className='nav-link-item' to="#">Sign In</Link>
                <button onClick={toggleTheme}>toggle</button>
            </LinkContainer>
        </NavbarContainer>
    )
}

export default Navbar