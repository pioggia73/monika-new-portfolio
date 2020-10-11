/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`
 })


module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby Portfolio`,
    description: `My Gatsby Portfolio built using Airtable and Gatsby Background Image. Styled using styled components`,
    author: `@monika`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `projects`,
            mapping: {image: `fileNode`}
          }
        ]
      }
    }
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     queryLimit: 1000, // Default to 100
    //     contentTypes: [`courses`, `projects`],
    //   },
    // },
  ],
}
