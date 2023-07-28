import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "../styles/global.css";
import { styled } from "styled-components";


const ContentContainer = styled.div`
`

const LayoutContainer = styled.div`
position: relative;
`

function Layout({ children, themeToggle, darkTheme }) {
    return (
        <LayoutContainer className='layout'>
            <Navbar themeToggle={themeToggle} darkTheme={darkTheme} />
            <ContentContainer className='layout-content-container'>
                {children}
            </ContentContainer>
            <Footer darkTheme={darkTheme} />
        </LayoutContainer>
    )
}

export default Layout