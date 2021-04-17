import React from 'react';
import links from '../constants/links'
import { setColor } from "../styles"
import styled from 'styled-components'

const Links = ({ styleClass }) => {
    return (
        <Wrapper>
            <div className={`${styleClass ? styleClass : ""}`}>
                {links.map((link, index) => {
                    const {url, title} = link
                    return(
                        <a 
                            className="nav-link"
                            key={ index } 
                            href={ url }
                        >
                            { title }
                        </a>
                    )
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, 1fr);

    .navbar-links {
        display: grid;
        grid-auto-flow: column;
        justify-content: right;
        grid-gap: 2rem;
    }

    .sidebar-links {
        grid-auto-flow: row;
        justify-content: left;
    }

    a {
        color: ${setColor.delta_2};
        display: block;
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: 1px;
        opacity: 0.7;
        transition: all 0.2s ease-out;
        text-transform: uppercase;
        outline: none;
    }

    a:hover {
        opacity: 1;
    }
`

export default Links;