import React, { Component } from "react"
import { Link, graphql } from "gatsby"

class Blog extends Component {
  render() {
    const data = this.props.data

    console.log(data);

    return (
      <>
        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <hr />
            <Link to={"/blog/" + node.slug}>
              <h4>{node.title}</h4>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
      </>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`