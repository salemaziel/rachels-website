import React from "react";

import {
  DoingScience1,
  FieldOfFlowers,
  FloralComposition,
} from "../../../images/index";

import homeStyles from "./home.module.css";
import "./picture.css";

const Picture = () => (
  <>
    <div className={homeStyles.Box}>
      <div className="image fit">
        <div id="HomePic">
          <img src={FloralComposition} />
          <img src={FieldOfFlowers} />
          <img src={DoingScience1} />
        </div>
      </div>
    </div>
  </>
);

export default Picture;
