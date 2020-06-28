import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";

import Picture from "./picture";

import Instafeed from './instafeed'

import { DoingScience1 } from "../../../images/index";

import homeStyles from "./home.module.css";

const SectionTwo = () => (
  <section className={homeStyles.SectionOne}>
    <div className={homeStyles.inner}>
      <Container fluid>
        <Row>
          <div className={homeStyles.Title}>
            <h1 className="Quentin">About Me</h1>
          </div>
        </Row>

        <Row >
          <Col>
\            <Instafeed />
            
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

export default SectionTwo;
