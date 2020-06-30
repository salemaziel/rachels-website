import React from "react";
import { Col, Row, Card, ListGroup, Container } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";
import { Butterfly } from "../images/index";

const Science = () => (
  <Layout>
    <SEO title="Science" />
    <Banner />
    <section className="inner" style={{minHeight: '80vh', height: '100%', margin: '5rem auto 3rem auto', padding: '0 10%'}}>
      <div style={{display: 'block', margin: 'auto', width: '80%'}}>
      <h1>Science Page</h1>
      </div>
      <Container fluid>
        <Card className="bg-dark text-white" style={{margin:'auto'}}>
          <Card.Img src={Butterfly} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Science Page</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </section>
  </Layout>
);

export default Science;
