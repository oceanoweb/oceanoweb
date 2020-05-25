import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

const Home = () => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <>
      <SEO title="Home" />
      <div class="container">
        <h1>
          Logo Oceano Web
          <a href="http://www.oceanoweb.com.br">
            <Img
              fixed={logo.childImageSharp.fixed}
              className="animated zoomIn"
              alt="Logo Oceano Web"
            />
          </a>
        </h1>
      </div>
    </>
  )
}

export default Home
