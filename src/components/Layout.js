/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import 'normalize.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'

const Layout = ({ children }) => {
  const [ isOpen, setIsOpen ] = useState( false )
  const toggleSidebar = _=> {
    setIsOpen( ! isOpen )
  }

  return (
    <>
      <GlobalStyles />
      <Sidebar toggleSidebar={ toggleSidebar } isOpen={ isOpen } />
      <PageWrapper>
        <Navbar toggleSidebar={ toggleSidebar }></Navbar>
        <main>{ children }</main>
        <Footer />
      </PageWrapper>
    </>
  )
}

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: [header-start] auto [header-end main-start] 1fr [main-end footer-start] auto [footer-end];
  min-height: 100vh;
`

export default Layout
