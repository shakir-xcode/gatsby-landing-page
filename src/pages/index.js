import * as React from "react"
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import styled, { ThemeProvider } from "styled-components"
import Feature from "../components/Feature"
import Productivity from "../components/Productivity"
import Testimonial from "../components/Testimonial"
import { useState } from "react"
import { appTheme } from "../themeConfig"
import Subscribe from "../components/Subscribe"


const BodyContainer = styled.main`
background: ${(props) => (props.theme.main_bg)};
padding-bottom: 2em;
`

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    const body = document.body;
    setDarkTheme((prev) => !prev);
    let dark = body.style.color === 'var(--neutral-black)';
    body.style.color = dark ? 'var(--neutral-white)' : 'var(--neutral-black)';
    body.style.backgroundColor = dark ? 'var(--intro-email-bg)' : 'var(--intro-email-bg-light)';
  }

  const theme = darkTheme ? appTheme.dark : appTheme.light;

  return (
    <ThemeProvider theme={theme}>
      <Layout themeToggle={toggleTheme} darkTheme={darkTheme}>
        <header>
          <Intro darkTheme={darkTheme} />
        </header>
        <BodyContainer>
          <Feature />
          <Productivity />
          <Testimonial />
          <Subscribe />
        </BodyContainer>
      </Layout>
    </ThemeProvider>
  )
}