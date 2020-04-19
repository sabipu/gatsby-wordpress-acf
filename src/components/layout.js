import React from 'react'

import Header from './header.js'
import Footer from './footer.js'


const Layout = ({ children }) => (
  <>
    <Header />
    <div>{children}</div>
    <Footer />
  </>
)

export default Layout