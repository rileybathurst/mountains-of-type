import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <h5>H5</h5>
      <h6>H6</h6>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
