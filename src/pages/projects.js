import React from 'react';
import {graphql} from 'gatsby';
/*     components     */
import Layout from '../components/Layout';
import Projects from '../components/Projects';

const ProjectsPage = ({data}) => {

  const {allAirtable: {nodes: projects}} = data

    return (
            <Layout>
                <section className='projects-page'>
                    <Projects projects={projects} title='all projects' /> 
                </section>
            </Layout>
    )
};

export const query = graphql`
  {
    allAirtable(filter:{ table: {eq: "projects"}}) {
      nodes {
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
                id
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage;
