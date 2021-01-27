exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = require.resolve(`./src/templates/BlogTemplate.tsx`);

  const eventPostTemplate = require.resolve(
    `./src/templates/EventTemplate.tsx`
  );

  const blogsResult = await graphql(`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/src/blog-posts/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  const eventsResult = await graphql(`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/src/event-posts/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (blogsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  if (eventsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  blogsResult.data.allMdx.edges.forEach(
    ({
      node: {
        frontmatter: { path },
      },
    }) => {
      createPage({
        path,
        component: blogPostTemplate,
        context: {},
      });
    }
  );

  eventsResult.data.allMdx.edges.forEach(
    ({
      node: {
        frontmatter: { path },
      },
    }) => {
      createPage({
        path,
        component: eventPostTemplate,
        context: {},
      });
    }
  );
};
