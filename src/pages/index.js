import * as React from "react"
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import styled from "styled-components"
import Feature from "../components/Feature"
import Productivity from "../components/Productivity"
import Testimonial from "../components/Testimonial"

const HeaderContainer = styled.header`
// background-color: var(--intro-email-bg);
// & * {
// background-color: var(--intro-email-bg);
// }
`

const BodyContainer = styled.main`
background-color: var(--main-bg)
`

export default function Home() {
  return (
    <Layout >
      <HeaderContainer>
        <Intro />
      </HeaderContainer>
      <BodyContainer>
        <Feature />
        <Productivity />
        <Testimonial />
      </BodyContainer>
    </Layout>
  )
}

// gatsby-starter-hello-world