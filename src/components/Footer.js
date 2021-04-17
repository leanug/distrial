import React from 'react'
import styled from 'styled-components'
import { 
    setColor, 
    setContainer,
    setBreakpoint,
    setGridGap } from '../styles'

const Footer = () => {
    return (
        <Wrapper>
          <div className="container">
              <div className="cols">
                    <div>
                        <span>Distrial</span>
                        <span className="rights">
                            &copy; { new Date().getFullYear() } Todos los derechos reservados.
                        </span>
                    </div>
                    <div className="right">
                        <a href="https://www.aerion.studio">Aerion.</a>
                    </div>
                </div>
          </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    align-items: center;
    background-color: ${setColor.delta_1};
    color: ${setColor.sigma};
    padding: 2rem 0;
    
    a {
        color: ${setColor.sigma};
    }

    span {
        display: block;
    }

    .container {
        ${setContainer.container};
    }

    @media screen and ( min-width: ${ setBreakpoint.small } ) {
        .cols {
            display: grid;
            grid-template-columns: repeat( auto-fit, minmax( 20rem, 1fr ));
            grid-gap: ${ setGridGap.gridGapGamma };
            margin: 1rem 0;

            div {
                display: flex;
                align-items: center;

                &.right {
                    justify-self: flex-end;
                }
            }
        }

        span {
            display: block;
        }

        .rights {
            margin-left: 2rem;
        }
    }
`

export default Footer
