import React from "react"

// components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import BlogShowcase from "../components/blogShowcase"

import Departments from "../components/departments"
import ContactForm from "../components/contactForm"
import LeavePage from "../components/leavePage"
import BulletList from "../components/bulletList"
import SupportUs from "../components/supportUs"
import SupportSeekers from "../components/forSupportSeekers"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Kvinnojour och tjejjour i Luleå - Kvinnojouren Iris." />
      <LeavePage />
      <Hero />
      <SupportSeekers />
      <Departments />
      <BulletList />
      <BlogShowcase />
      <SupportUs />
      <ContactForm />
    </Layout>
  )
}

export default IndexPage
