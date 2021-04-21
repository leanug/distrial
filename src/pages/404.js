import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import SEO from "../components/SEO"
import {setContainer} from '../styles'

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO 
            description="404 - Pagina no encontrada"
            title="404 Pagina no encontrada"
            />
            <Wrapper>
                <div>
                    <h1>404</h1>
                    <h3>Pagina no encontrada</h3>
                    <Link to="/" className="btn">Inicio</Link>
                </div>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100vh;
    margin: 14rem 0;  
    text-align: center;
    ${setContainer.container};

    .btn {
        margin-top:3rem;
    }
`

export default NotFoundPage
