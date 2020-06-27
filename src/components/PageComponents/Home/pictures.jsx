import React, { Component } from "react";

import CrossfadeImage from "image-crossfade-react";

import { DoingScience1, FieldOfFlowers, FloralComposition } from '../../../images/index'

const images = [
    {
        src: DoingScience1,
    },
    {
        src: FieldOfFlowers,
    },
    {
        src: FloralComposition
    }
  ];


/*lass Pictures extends Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0,
    };
  }

  render() {
    return (*/
const Pictures = () => (        
      <>

                <CrossfadeImage
          src={images}
          duration={1000}
          timingFunction={"ease-out"}
        />
      </>
    );
//  }
//}

export default Pictures