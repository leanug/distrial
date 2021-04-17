import React, {useState, useEffect} from 'react'
import Background from '../components/Background'
import styled from 'styled-components'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import {setColor, setTransition} from '../styles'

const Slider = ({images}) => {
    const [index, setIndex] = useState(0)
  
    useEffect(() => {
        const lastIndex = images.length - 1
        if(index < 0) setIndex(lastIndex)
        if(index > lastIndex) setIndex(0)
    }, [index, images])

    return (
        <Background image={images[index]}>
            <Wrapper>
                <button 
                    className="prev"
                    type="button" 
                    onClick={ () => setIndex(index - 1) } 
                >
                    <BsChevronLeft />
                </button>
               <button 
                    className="next"
                    type="button"
                    onClick={ () => setIndex(index + 1) } 
                >
                    <BsChevronRight />
                </button>
                
                <div className="dots">
                    {images.map((_, btnIndex) => {
                        return (
                            <button 
                                key={ btnIndex } 
                                onClick={ () => setIndex(btnIndex) }
                                className={ `dot-button  ${index === btnIndex ? 'active' : undefined}` }
                                aria-label={ `Image number ${ btnIndex }` }
                            >
                            </button>
                        )
                    })}
                </div>
            </Wrapper>
        </Background>
    )
}

const Wrapper = styled.div`
    /* Next & previous buttons */
    height: 100vh;
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 10rem 1fr 10rem;
    grid-template-areas:
        "a b c"
        "d e f"
        "g h i";

    .prev,
    .next {
        background: transparent;
        color: ${setColor.sigma};
        height: 6rem;
        width: 5rem;
        cursor: pointer;
        font-size: 3rem;
        line-height: 1;
        ${setTransition()};
    }

    svg{
        display: block;
        margin: auto;
    }

    .prev {
        align-self: center;
        border-radius: 50%;
        grid-area: d;
        margin-left: 3rem;
    }

    .next {
        border-radius: 50%;
        grid-area: f;
        margin-right: 3rem;
    }

    .dots {
        grid-area: h;
        text-align: center;
        width: 100%;
    }

    .dots > .dot-button {
        background-color: transparent;
        border-radius: 50%;
        border: 1px solid ${setColor.sigma};
        cursor: pointer;
        display: inline-block;
        height: 14px;
        margin: 0 1.3rem;
        opacity: 0.7;
        ${setTransition()};
        width: 14px;
    }

    .dots > .active, 
    .dots > span:hover {
        background-color: ${setColor.sigma};
        opacity: 1;
    }
`

export default Slider