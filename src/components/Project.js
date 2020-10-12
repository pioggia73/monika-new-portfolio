import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { FaGithubSquare, FaShareSquare} from 'react-icons/fa';

const Project = ({project, index}) => {

    const {name, description, github_url, pageurl, stack} = project.data;

    return (
        <Wrapper>
            <article className='project'>

                <div className='project-info'>
                    <span className='project-number'>0{index+1}.</span>
                    <h3>{name}</h3>
                    <p className="project-desc">{description}</p>
                    <div className="project-stack">
                        {stack.map(item => {
                        return <span key={item.id}>{item}</span>
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





`

Project.propTypes = {

};

export default Project;
