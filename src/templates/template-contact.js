import React, { Component } from "react"
import { graphql } from "gatsby"
import ReactTypingEffect from 'react-typing-effect'

import Layout from '../components/Layout'
import "../assets/main.css"

class Homepage extends Component {
  render() {
    const typeEffect = ["Developer.", "Web Designer.", "Surfer.", "Husband.", "Skateboarder."];
    return (
      <Layout>
        <div className="wrapper">
          <div className="banner">
            <div className="container">
              <div className="bannerText">
                <span className="bannerInfo">Hey, I am yo man this is contact</span>
                <span className="bannerTitle">Bipu Bajgai</span>
                <div className="personInfo">I'm a <ReactTypingEffect speed={120} eraseDelay={1500} typingDelay={500} text={typeEffect} /></div>
              </div>
            </div>
            <div className="scrollDown">
              <svg className="icon" viewBox="0 0 64 64"><path d="m32 8c-1.104 0-2 .896-2 2v39.899l-14.552-15.278c-.761-.799-2.026-.832-2.828-.069-.8.762-.831 2.027-.069 2.827l16.62 17.449c.756.756 1.76 1.172 2.829 1.172 1.068 0 2.073-.416 2.862-1.207l16.586-17.414c.762-.8.73-2.065-.069-2.827-.799-.763-2.065-.731-2.827.069l-14.552 15.342v-39.963c0-1.104-.896-2-2-2z"/></svg>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          path
        }
      }
    }
  }
`