import React from "react"
import styled from 'styled-components'
import { setColor, setFont } from "../styles"

const Title = ({ title, text, styleClass }) => {
  return (
    <Wrapper className={styleClass || 'left'}>
      <h2 className="d-3">{ title || 'default title' }</h2>
      { text && <p>{ text }</p> }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h2 {
    color: ${setColor.gamma};
    font-family: ${setFont.primaryFont};
    font-weight: 400;
    letter-spacing: 4px;
    margin-top: 0;
    text-transform: uppercase;
  }

  & > p {
    color: ${setColor.delta_1};
    font-family: ${setFont.primaryFont};
    letter-spacing: 1px;
    margin-top: 2rem;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  .left {
    text-align: left;
  }

  .center {
    text-align: center;
  }

  &.sigma > h2 {
    color: ${setColor.sigma};
  }
`

export default Title