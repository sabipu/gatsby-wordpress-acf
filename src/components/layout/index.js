import React from 'react'

import Header from '../header'
import Footer from '../footer'


const Layout = ({ children }) => (
  <>
    <Header />
    <div>{children}</div>
    <Footer />
  </>
)

export default Layout