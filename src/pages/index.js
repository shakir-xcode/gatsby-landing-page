import * as React from "react"
import Layout from "../components/Layout"
import Intro from "../components/Intro"
import styled from "styled-components"

const HeaderContainer = styled.header`
// background-color: var(--intro-email-bg);
// & * {
// background-color: var(--intro-email-bg);
// }
`

const BodyContainer = styled.main`
`

export default function Home() {
  return (
    <Layout >
      <HeaderContainer>
        <Intro />
      </HeaderContainer>
      <BodyContainer>
      </BodyContainer>
    </Layout>
  )
}

// gatsby-starter-hello-world