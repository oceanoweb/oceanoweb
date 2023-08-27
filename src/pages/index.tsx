import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/Seo"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <SEO title="Home" />
      <main>
        <h1>
          Logo Oceano Web
          <a href="http://www.oceanoweb.com.br">
            <StaticImage
              src="../images/logo.png"
              alt="Oceno Web logo"
              placeholder="blurred"
              layout="fixed"
              width={200}
              className="animated zoomIn"
            />
          </a>
        </h1>
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
