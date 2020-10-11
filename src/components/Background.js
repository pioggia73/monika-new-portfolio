import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import styled, { keyframes } from "styled-components";
import BackgroundImage from "gatsby-background-image";

const query = graphql`
  {
    file(relativePath: {eq: "mainBcg.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Background = ({children}) => {

    const { file: {childImageSharp: {fluid}}} = useStaticQuery(query);

    return (
      <Wrapper>
        <BackgroundImage
          Tag="div"
          fluid={fluid}
          className="bcg"
          preserveStackingContext={true}
        >
            {children}
        </BackgroundImage>
      </Wrapper>
    )
};

const fadeIn = keyframes`
      from{background-color:rgb(0,0,0,0.8);}
      to{background-color:rgba(0,0,0,0.4);}
      `

const Wrapper = styled.div`

.bcg {
    min-height: 100vh;
    animation: ${fadeIn} 4s ease-in-out 1 forwards;
    display: flex;
    justify-content: center;
    align-items: center;
};

.bcg:before {
  opacity: 1;
};
`

export default Background;
