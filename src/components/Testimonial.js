import React, {useState} from 'react';
import people from '../constants/testimonials';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import styled from 'styled-components'
import { 
    setColor, 
    setRadius, 
    setTransition } from '../styles';

const Testimonial = () => {
  const [ index, setIndex ] = useState( 0 )
  const { name, job, image, text } = people[ index ]

  const prevPerson = ()=> {
    setIndex( index => {
      const newIndex = index > 0 ? index - 1 : people.length - 1 
      return newIndex
    })
  }
  
  const nextPerson = ()=> {
    setIndex( index => {
      const newIndex = index + 1 < people.length ? index + 1 : 0 
      return newIndex
    })
  }

  return (
    <Wrapper>
        <div>
            <p className='info h3'>{text}</p>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
            </div>
            <span className='author'>{name}</span>
            <p className='job'>{job}</p>
        </div>
        <div className="buttons">
            <button aria-label="Previous testimony" className='prev-btn' onClick={prevPerson}>
                <BsArrowLeft />
            </button>
            <div className="counter">
                <div className="inner-counter">
                    {('0' + (index + 1)).slice(-2)} <span>/</span> {('0' + people.length).slice(-2)}
                </div>
            </div>
            <button aria-label="Next testimony" className='next-btn' onClick={nextPerson}>
                <BsArrowRight />
            </button>
        </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    ${setTransition()};
    display: grid;
    min-height: 42rem;

    .title {
        text-align: center;
        margin-bottom: 4rem;
    }

    .info {
        margin-bottom: 4rem;
    }

    .img-container {
        position: relative;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-bottom: 1rem;
    }

    .person-img {
        width: 100%;
        display: block;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        position: relative;
    }

    .img-container::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: -0.25rem;
        right: -0.5rem;
        border-radius: 50%;
    }

    .line {
        width: 5rem;
    }

    .author {
        color: ${setColor.delta_3};
        font-weight: 700;
        margin-bottom: 0.25rem;
    }

    .counter {
        align-items: center;
        color: ${setColor.delta_2};
        display: flex;
        font-size: 0.8em;
        margin: 0 4rem;

        span {
            margin: 1rem;
        }
    }

    inner-counter {
        display: inline-block;
    }

    .job {
        color: ${setColor.delta_3};
        margin-bottom: 0.5rem;
        font-size: 1em;
        line-height: 1;
    }

    .buttons {
        justify-self: flex-start;
        display: flex;
        margin-top: 4rem;
        align-self: flex-end;
    }

    .prev-btn,
    .next-btn {
        align-items: center;
        background-color: transparent;
        cursor: pointer;
        border: 1px solid ${setColor.tau};
        display: flex;
        font-size: 1em;
        height: 4rem;
        justify-content: center;
        margin: 0;
        ${setRadius.rounded}
        width: 4rem;
    }
`

export default Testimonial;
