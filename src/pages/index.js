import * as React from "react"
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import styled, { ThemeProvider } from "styled-components"
import Feature from "../components/Feature"
import Productivity from "../components/Productivity"
import Testimonial from "../components/Testimonial"
import { useState } from "react"
import { appTheme } from "../themeConfig"

const HeaderContainer = styled.header`
// background-color: var(--intro-email-bg);
// & * {
// background-color: var(--intro-email-bg);
// }
`
// background-color: ${(props) => (props.darkTheme ? 'var(--main-bg)' : 'var(--main-bg-light))'};

const BodyContainer = styled.main`
background: ${(props) => (props.theme.main_bg)};

`

// export const MyThemeContext = React.createContext();

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(true);

  const theme = darkTheme ? appTheme.dark : appTheme.light;
  console.log(theme)
  return (
    // <MyThemeContext.Provider value={true}>
    <ThemeProvider theme={theme}>
      <Layout >
        <HeaderContainer>
          <Intro darkTheme={darkTheme} />
        </HeaderContainer>
        <BodyContainer>
          <Feature />
          <Productivity />
          <Testimonial />
        </BodyContainer>
      </Layout>
    </ThemeProvider>
    // </MyThemeContext.Provider>
  )
}