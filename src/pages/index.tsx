import * as React from "react"

import Layout from "@/components/Layout"
import Seo from "@/components/seo"
import HeroSection from "@/components/HeroSection"
import OurWorkHomeContainer from "@/components/OurWorkHomeContainer"
import TechStackContainer from "@/components/TechStackContainer"
import Col3ServicesContainer from "@/components/Col3ServicesContainer"
import CallToActionMini from "@/components/CallToActionMini"
import OurProcess from "@/components/OurProcess"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection></HeroSection>
    <OurWorkHomeContainer></OurWorkHomeContainer>
    <Col3ServicesContainer></Col3ServicesContainer>
    <TechStackContainer></TechStackContainer>
    <OurProcess page="Home" />
    <CallToActionMini
      title="What we do?"
      description="Take the first step by transforming your digital foothold using our Containers with Kubernetes service!"
    />
  </Layout>
)

export default IndexPage
