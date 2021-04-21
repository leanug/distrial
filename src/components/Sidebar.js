import React from 'react'
import Links from './Links'
import { IoMdClose } from 'react-icons/io'
import styled from 'styled-components'
import { setColor } from '../styles/'

const Sidebar = ({ isOpen, toggleSidebar }) => (
    <Wrapper 
      className={ `${ isOpen ? 'sidebar showSidebar' : 'sidebar' }` }
      aria-label="Main sidebar containing navigation links"
    >
      <div className="btn-container">
        <button aria-label="close menu" onClick={ toggleSidebar } className="close-btn">
          <IoMdClose />
        </button>
      </div>
      <div className="sidebar-content">
        <Links styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
      </div>
    </Wrapper>
)

const Wrapper = styled.aside`
    &.sidebar {
      background-color: ${setColor.sigma};
      left: 0;
      width: 100%;
      overflow-x: hidden;
      padding: 3rem 3rem;
      position: fixed;
      transition: all 0.2s ease-out;
      transform: translateY(-100%);
      top: 0;
      z-index: 999;

      a {
        color: ${setColor.delta_1};
        font-size: 1.8rem;
        margin: 1rem 0;
      }

      .btn-container {
        display: flex;
        justify-content: flex-end;
      }

      .close-btn {
        background-color: transparent;
        border: none;
        color: ${setColor.delta_1};
        cursor: pointer;
        font-size: 3rem;
      }

      .sidebar-content {
        margin: 2rem 0;
        width: 100%;
        align-items: center;
      }

      .links-container {
        padding-top: 2rem;
      }

      &.showSidebar {
        transition: all 0.2s ease-out;
        transform: translateX(0);
      }
    }
`

export default Sidebar