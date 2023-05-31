import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>H1 - Everest</h1>
      <h2>H2 - Aconcagua</h2>
      <h3>H3 - Denali</h3>
      <h4>H4 - Kilimanjaro</h4>
      <h5>H5 - Elbrus</h5>
      <h6>H6 - Vinson Massif</h6>
      <small>Small - Kosciuszko</small>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
