import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";

import Picture from "./picture";

import Instafeed2 from './instafeed2'

import { DoingScience1 } from "../../../images/index";

import homeStyles from "./home.module.css";

import Fade from 'react-reveal/Fade'

const SectionTwo = () => (
  <section className={homeStyles.SectionTwo}>
    <div className="inner" /*className={homeStyles.inner}*/>
      <Container fluid>
        <Row>
          <div className={homeStyles.Title}>
            <h1 className="Quentin">Instagram</h1>
          </div>
        </Row>
      <section>
          <Col>
          <Fade cascade>
            <Instafeed2 />
            </Fade>
            
          </Col>
          </section>
      </Container>
    </div>
  </section>
);

export default SectionTwo;
