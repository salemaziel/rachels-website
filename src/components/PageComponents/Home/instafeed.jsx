import React from 'react'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Card from 'react-bootstrap/Card'

import InstagramEmbed from 'react-instagram-embed';

class Instafeed extends React.Component {
    render() {
      const settings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }
  
      return (
        <>
          <Slider {...settings}>
            <div className="Box">
              <InstagramEmbed
            url="https://www.instagram.com/p/B_Sm_dyDEQ9/"
            maxWidth={300}
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            style={{margin:'auto',   justifyContent: 'center',  display: 'inline-block', height: '540px', width: '300px'}}
          />
            </div>

            <div className="Box">
              <InstagramEmbed
            url="https://www.instagram.com/p/B-Z6u6XjvyU/"
            maxWidth={300}
            
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            style={{margin:'auto',   justifyContent: 'center',  display: 'inline-block', height: '540px', width: '300px'}}          />

            </div>

            <div className="Box">
              <InstagramEmbed
            url="https://www.instagram.com/p/B-PfBCeD0Uo/"
            maxWidth={300}
            
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            style={{margin:'auto',   justifyContent: 'center',  display: 'inline-block', height: '540px', width: '300px'}}          />

            </div>

            <div className="Box">
              <InstagramEmbed
            url="https://www.instagram.com/p/B9jphtuJdD8/"
            maxWidth={300}
            
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            style={{margin:'auto',   justifyContent: 'center', display: 'inline-block', height: '540px', width: '300px'}}          />

            </div>

            <div className="Box">
              <InstagramEmbed
            url="https://www.instagram.com/p/B9FxGLoJ06w/"
            maxWidth={300}
            
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            style={{margin:'auto',   justifyContent: 'center',  display: 'inline-block', height: '540px', width: '300px'}}
          />

            </div>

            <div className="Box">
              <InstagramEmbed
            url="https://www.instagram.com/p/B8HAdYXpmQ-/"
            maxWidth={300}
            
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            style={{margin:'auto',   justifyContent: 'center',  display: 'inline-block', height: '540px', width: '300px'}}          />

            </div>
            </Slider>
            </>
      )
    }
}

      export default Instafeed