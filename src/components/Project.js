import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { FaGithubSquare, FaShareSquare} from 'react-icons/fa';

const Project = ({project, index}) => {

    const {name, description, github_url, pageurl, stack} = project.data;
    const fluid = project.data.image.localFiles[0].childImageSharp.fluid

    return (
        <Wrapper>
            <article className='project'>
                <Image fluid={fluid} className='project-img' />
                <div className='project-info'>
                    <span className='project-number'>0{index+1}.</span>
                    <h3>{name}</h3>
                    <p className="project-desc">{description}</p>
                    <div className="project-stack">
                        {stack.map(item => {
                        return <span key={item.id}>{item }</span>
                        })}
                    </div>
                    <div className="project-links">
                        <a href={github_url} target="_blank" rel="noreferrer">
                        <FaGithubSquare className="project-icon" />
                        </a>
                        <a href={pageurl} target="_blank" rel="noreferrer">
                        <FaShareSquare className="project-icon" />
                        </a>
                    </div>
                </div>
            </article>
        </Wrapper>
    )
};

const Wrapper = styled.section`

    .project {
        display:grid;
        margin-bottom: 2rem;   
    };

    .project-img {
        border-top-left-radius: var(--radius);
        border-top-right-radius: var(--radius);
        height: 19rem;
        z-index: 1;
        margin-bottom: 2rem;
        position: relative;
    };

    .project-img::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
        opacity: 0.85;
        transition: var(--transition);
        transform: scaleX(1);
  };

  .project:hover .project-img::after {
    transform: scaleX(0);
  };

  .project-info {
    background: var(--clr-main-white);
    padding: 1rem 2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  };

  .project-info h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  };

  .project-number {
    display: inline-block;
    font-size: 1.25rem;
    color: var(--clr-primary-5);
    margin-bottom: 0.75rem;
  };

  .project-desc {
    word-spacing: 6px;
    color: var(--clr-primary-5);
    font-size: 1.2rem;
  };

  .project-stack {
      margin: 1rem 0;
  };
  
  .project-stack span {
    display: inline-block;
    background: var(--clr-grey-5);
    color: var(--clr-main-white);
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  };
  
  .project-icon {
    color: var(--clr-primary-5);
    font-size: 1.25rem;
    margin-right: 0.5rem;
    transition: var(--transition);
  };

  @media screen and (min-width: 768px) {
    .project-img {
      height: 22rem;
    }
  };

  @media screen and (min-width: 992px) {
    .project {
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
    };

    .project-img {
      grid-column: 1 / span 8;
      grid-row: 1 / 1;
      height: 30rem;
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
    };
    
    .project-info {
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
      z-index: 1;
      grid-column: 5 /12;
      grid-row: 1 / 1;
    };
  };

`

Project.propTypes = {

};

export default Project;
