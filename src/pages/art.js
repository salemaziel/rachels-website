import React from "react";
import { Col, Row, Card, ListGroup, Container } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";
import { Butterfly } from "../images/index";

const Art = () => (
  <Layout>
    <SEO title="Art" />
    <Banner />
    <section style={{minHeight: '80vh', height: '100%', margin: '5rem auto 3rem auto', padding: '0 10%'}}>
      <div style={{display: 'block', margin: 'auto', width: '80%'}}>
      <h1>About Page</h1>
      </div>
      <Container fluid>
        <Card className="bg-dark text-white" style={{margin:'auto'}}>
          <Card.Img src={Butterfly} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Art Page</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              
            </Card.Text>
            <Card.Text>Made by Salem</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </section>
  </Layout>
);

export default Art;
