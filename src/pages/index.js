import React from 'react'
import Layout from '../components/Layout'
import Contact from '../components/Contact'
import Background from '../components/Background'
import Slider from '../components/Slider'
import Testimonial from '../components/Testimonial'
import SEO from '../components/SEO'
import styled from 'styled-components'
import { setSectionBg, setBreakpoint } from '../styles'

const IndexPage = ({ data }) => {
  const { images: { edges: portfolioImages }} = data

  const portfolioFluid = portfolioImages.map(item => (
    item.node.childImageSharp.fluid
  ))

  return (
    <Layout>
      <SEO 
        description="Find out everything you need about the great real estate development project in Colonia del sacramento."
        title="Home"
      />

      <Wrapper>
        <section id="section-1" className="mb-10">
          <Slider className="slider" images={portfolioFluid} />
        </section>

        <section id="section-2" className="container section-columns mb-10">
          <div className="title">
            <sup>01</sup>
            <h2 className="mar-bot"> Quienes Somos</h2>
          </div>
          
          <div>
            <p className="h3">
            Distrial es un estudio de diseño con sede en Buenos Aires, Argentina. </p>
              <p className="h3">
              Desde 2015 diseñamos combinando lo antiguo con lo nuevo para lograr un efecto minimalista y elegante 
              en nuestras creaciones que resulta muy agradable a los sentidos.
              </p>
              <p className="h3 mb-5">
              </p>
              <div className="columns">
                <div>          
                  <h4>Objetivo</h4>
                  <div className="line"></div>
                  <p>
                    Trabajamos con artesanos tradicionales que aprovechan nuevas tecnicas y conocimientos 
                    ancestrales para presentar nuevas creaciones y procesos de fabricacion.
                  </p>
                </div>
                <div>
                  <h4>Diseño</h4>
                  <div className="line"></div>
                  <p>
                    Derivamos cada producto de la observacion del comportamiento humano y de 
                    como interactuan las personas con los objetos que las rodean.
                  </p>
                </div>
            </div>
          </div>
        </section>
      
        <section id="section-3" className="container section-columns mb-10">
          <div className="title">
            <sup>02</sup>
            <h2 className="mar-bot">Testimonios</h2>
          </div>
          <Testimonial />
        </section>

        <Background image={ data.office.childImageSharp.fluid }></Background>

        <section id="section-4" className="container section-columns p-y">
          <div className="title">
            <sup>03</sup>
            <h2 className="mar-bot">Contacto</h2>
          </div>
          <div>
            <p>Por cualquier consulta no dudes en contactarte con nosotros!</p>
            <Contact />
          </div>
        </section>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    office: file(relativePath: {eq: "office.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    images: allFile(filter: {relativeDirectory: {eq: "portfolio"}}, sort: {fields: childrenImageSharp___fixed___originalName}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(quality: 100, maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled.article`
    .section-bg {
        ${ setSectionBg('grey') }
    }

    .section {
        padding: 10rem 0;
    }

    .description {
      margin-bottom: 10rem;
    }
    
    @media screen and (min-width: ${setBreakpoint.small}) {
      .section-columns {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 4rem;
      }

      .columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 4rem;
      }
    }
    
    .mb-5 {
      margin-bottom: 5rem;
    }

    .mb-10 {
      margin-bottom: 10rem;
    }

    .mar-top {
      margin-top: 3rem;
    }

    .mar-bot {
      margin-bottom: 4rem;
    }

    .detail {
      display: block;
      font-weight: 700;
      margin-left: 2rem;
      text-transform: uppercase;
    }

    .title {
      display: flex;
      line-height: 1;

      sup {
        font-weight: 600;
        margin-top: 2rem;
        margin-right: 2rem;
      }
    }
`

export default IndexPage
