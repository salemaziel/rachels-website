import React from "react";
import { Link } from "gatsby";
import homeStyles from "./home.module.css";

const Hero = () => (
  <section id="banner" className={homeStyles.Banner}>
      <div className={homeStyles.inner}>
        <div className="NoDesktop" style={{margin: '30% 0 0 0'}}>
        <div className={homeStyles.Box}>
          <h1 className="Quentin" style={{color: 'white', fontWeight: '700', textAlign: 'left',textShadow: '2px 2px 4px black', fontSize: '2.5rem', letterSpacing: '3px'}}>
            Rachel <br />
            Ellyn <br />
            Gurlin, Ph.D

          </h1>
        </div>
        </div>
    </div>
  </section>
);

export default Hero;
