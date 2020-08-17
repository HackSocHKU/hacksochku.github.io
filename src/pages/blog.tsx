import React, { FunctionComponent } from "react";

import { Layout, SEO } from "../components";

const Blog: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div>blog page</div>
    </Layout>
  );
};

export default Blog;
