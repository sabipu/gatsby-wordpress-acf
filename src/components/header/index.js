import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Header = ({ data }) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        wordpressAcfOptions {
          options {
            main_logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
        allWordpressWpApiMenusMenusItems {
          edges {
            node {
              name
              count
              items {
                title
                url
                wordpress_id
                object_slug
                wordpress_children {
                  title
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header className="header">
        <div className="logo">
          <Link to="/">
            <Img fluid={data.wordpressAcfOptions.options.main_logo.localFile.childImageSharp.fluid} />
          </Link>
        </div>
        <ul className="main-nav">
        {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((menu) => (
        <li key={menu.title}><Link to={(menu.object_slug === 'homepage') ? '' : menu.object_slug}>{menu.title}</Link></li>
        ))}
        </ul>
      </header>
    )}
  />
)

export default Header