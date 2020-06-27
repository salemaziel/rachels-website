import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

import Page from '../components/PageComponents/Home/Page'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Page />

  </Layout>
);

export default IndexPage;
