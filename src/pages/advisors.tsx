import React, { FunctionComponent } from "react";

import { Layout, Advisors as AdvisorsContent, Footer } from "../components";

const AdvisorsPage: FunctionComponent = () => (
  <Layout>
    <AdvisorsContent />
    <Footer />
  </Layout>
);

export default AdvisorsPage;
