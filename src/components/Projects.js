import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
/****** components ******/
import Title from '../components/Title';
import Project from '../components/Project';

const Projects = ({title, projects, showLink}) => {
    return (
        <Wrapper>
            <section className='section section-projects'>
                <Title title={title} />
                <div className='section-center projects-center'>
                    {projects.map((project, index) => {
                        return <Project key={project.id} index={index} project={project} />
                    })}
                </div>
                {
                showLink && <Link to='projects' className='btn center-btn'>all projects</Link>
                }
            </section>
        </Wrapper>
    )
};

const Wrapper = styled.section`

    .projects {
      background: var(--clr-main-grey);
   };

`

export default Projects;
