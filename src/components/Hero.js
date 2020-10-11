import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
/*     components     */
import Background from '../components/Background' ;

const Hero = () => {
    return (
      <Wrapper>
        <Background>
          <div className="hero-center">
            <div className="underline"></div>
            <h1>I am Monika</h1>
            <h2>I am a front-End developer</h2>
            <Link to="/contact" className="btn center-btn">
              contact me
            </Link>
          </div>
        </Background>
      </Wrapper>
    )
};

const Wrapper = styled.section`
  .hero-center {
    width: 90vw;
    max-width: 80rem;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: var(--clr-main-white);
    }

    h2 {
      color: var(--clr-main-white);
      margin-bottom: 4rem;
    }
  }
`

export default Hero;
