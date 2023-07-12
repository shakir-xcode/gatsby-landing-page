import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "../styles/global.css";
import styled from 'styled-components';

//  max-width: 90%;
//     margin: 0 auto;
// @media ${devices.tablet} {
//     max-width: 100%;
// }
// border: 1px solid white;

const ContentContainer = styled.div`
`


function Layout({ children }) {
    return (
        <div className='layout'>
            <Navbar />
            <ContentContainer className='layout-content-container'>
                {children}
            </ContentContainer>
            <Footer />
        </div>
    )
}

export default Layout