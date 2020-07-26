exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = require.resolve(`./src/templates/BlogTemplate.tsx`);

  const blogResult = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (blogResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  blogResult.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        frontmatter: { slug },
      },
    }) => {
      createPage({
        path: slug,
        component: blogPostTemplate,
        context: {
          slug,
        },
      });
    }
  );
};
