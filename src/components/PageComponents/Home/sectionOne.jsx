import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";

import Picture from "./picture";

import { DoingScience1 } from "../../../images/index";

import homeStyles from "./home.module.css";

import Fade from 'react-reveal/Fade'

const SectionOne = () => (
  <section className={homeStyles.SectionOne}>
    <div className="inner" /*className={homeStyles.inner}*/>
      <Container fluid>
        <Row>
          <div className={homeStyles.Title}>
            <h1 className="Quentin">
            <Fade cascade>
About Me
            </Fade>
            </h1>
          </div>
        </Row>

        <Row >
          <Col sm={6}>
            <div className={homeStyles.Box}>
                <div className="image fit">
                  <Fade cascade>
              <img src={DoingScience1} alt="rachel homepage" />
              </Fade>
              </div>
</div>
{/*<Picture />*/}
          </Col>
          <Col sm={6}>
          <div className={homeStyles.Box}>
            <Fade cascade>
              <article>
                  <h2>
                      Hi, Im Rachel :)
                  </h2>
                  <hr />
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  Lorem ipsum dolor sit amet:
                  <ul>
                      <li>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li>
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                  </ul>
                  
              </article>
              </Fade>
              
              </div>

          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

export default SectionOne;
