import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
/***** components *****/
import Layout from '../components/Layout';
import Projects from '../components/Projects';

const ProjectsPage = ({data}) => {

    const {allAirtable: {nodes: projects}} = data

    return (
        <Wrapper>
            <Layout>
                <section className='projects-page'>
                    <Projects projects={projects} title='all projects' />
                </section>
            </Layout>
        </Wrapper>
    )
};

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "projects"}}) {
      nodes {
        id
        data {
          description
          github_url
          name
          pageurl
          stack
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled.section`



`

export default ProjectsPage;
