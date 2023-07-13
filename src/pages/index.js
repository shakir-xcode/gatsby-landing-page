import * as React from "react"
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import styled from "styled-components"
import Feature from "../components/Feature"

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
      </BodyContainer>
    </Layout>
  )
}

// gatsby-starter-hello-world