import React from 'react'
import {Link} from 'gatsby'
import {AiOutlineMenu} from 'react-icons/ai'
import styled from 'styled-components'
import { 
  setColor,
  setFont,
  setTransition} from '../styles'

const Navbar = ({ toggleSidebar }) => {
  return (
    <Nav>
      <div className="logo-wrap">
          <Link to="/">Distrial</Link>
      </div>
      <button aria-label="Menu Toggle" onClick={ toggleSidebar }>
          <AiOutlineMenu />
      </button>
    </Nav>
  )
}

const Nav = styled.header`
  align-items: center;
  background: ${setColor.delta_1};
  display: flex;
  font-family: ${setFont.primaryFont};
  justify-content: space-between;
  min-height: 5rem;
  padding: 0 3rem;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;

  .logo-wrap {
    align-items: center;
    font-weight: 500;
    letter-spacing: 3px;
  }

  a {
    color: ${setColor.sigma};
  }
  
  button {
    background: transparent;
    border-color: transparent;
    color: ${setColor.sigma};
    cursor: pointer;
    font-size: 2.5rem;
    line-height: 1;
    margin-left: 3rem;
    padding: 0;
    ${ setTransition() };
    width: min-content;
    height: 26px;
  }

  button:hover {
    opacity: 0.6;
  }

`

export default Navbar