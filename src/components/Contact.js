import React from 'react'
import styled from 'styled-components'
import { 
    setColor, 
    setTransition } from '../styles/'

const Contact = () => (
    <Wrapper>
        <form>
            <input 
                type="text" 
                name="name"
                className="form-control"
                placeholder="Nombre"
            />
            <input 
                type="email" 
                name="name"
                className="form-control"
                placeholder="Email"
            />
            <textarea placeholder="Mensaje" name="message" rows="5" className="form-control"></textarea>
            <button aria-label="Send Message" type="submit" value="Send">enviar mensaje</button>
        </form>
        <p className="grey">* No compartiremos tu email con terceros.</p>
    </Wrapper>
)

const Wrapper = styled.section`
   .info-data > p {
        display: flex;
    }

    p:not(:last-child) {
        margin-bottom: 3rem;
    }

    input[type=text],
    input[type=email],
    textarea
    {
        background-color: ${ setColor.sigma };
        border: 1px solid ${ setColor.tau };
        color: ${ setColor.delta_2 };
        font-size: 1.6rem;
        margin: .5rem 0 2rem 0;
        padding: 1.5rem;
        width: 100%;
    }

    button {
        background-color: ${setColor.gamma};
        color: ${setColor.sigma};
        cursor: pointer;
        padding: 1.3rem 2rem;
        text-transform: uppercase;
        ${setTransition()};
    }

    .grey {
        color: ${setColor.delta_3};
        margin-top: 2rem;
    }
`

export default Contact;