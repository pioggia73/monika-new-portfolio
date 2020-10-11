exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type AuthorJson implements Node @dontInfer {
      name: String!
      description: String!
      github_url: String!
      pageurl: String!
      stack: [String]!
    }
  `
  createTypes(typeDefs)
}