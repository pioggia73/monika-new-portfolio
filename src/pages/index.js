import React from "react";
// import {graphql} from 'gatsby';
/* components */
import Layout from '../components/Layout';
import Hero from '../components/Hero';
// import Courses from '../components/Courses';
// import Projects from '../components/Projects';

export default () => {

  // const {allAirtable: {nodes: projects}} = data
  
  return (
    <Layout>
        <Hero />
        {/* <Projects projects={projects} title='featured projects' showLink /> */}
        {/* <Courses /> */}
    </Layout>
  )
};

// export const query = graphql`
//   {
//     allAirtable(filter: {table: {eq: "projects"}, data: {featured: {eq: true}}}) {
//       nodes {
//         id
//         data {
//           description
//           github_url
//           name
//           pageurl
//           stack
//           image {
//             localFiles {
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `