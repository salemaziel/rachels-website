import React from "react";
import { Link } from "gatsby";
import homeStyles from "./home.module.css";

const Hero = () => (
  <>
  <section className={homeStyles.Banner} >
 
      <div className={homeStyles.inner}>
        <div className="NoMobile" style={{height: '30em'}} />
        <div className="NoDesktop" id="namebox" /*style={{margin: '30% 0 0 0',}}*/>
        <div className={homeStyles.Box}>
          <h1 className="Quentin" id="nameHero" /*style={{color: 'white', textAlign: 'left',textShadow: '2px 2px 4px black', fontSize: '3rem', letterSpacing: '2px'}}*/>
            Rachel <br />
            Ellyn <br />
            Gurlin, <br />
            Ph.D

          </h1>
        </div>
        </div>
        </div>
  </section>
  </>
);

export default Hero;
