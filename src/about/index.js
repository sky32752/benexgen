import React, { Component } from "react";

const TweenMax = window.TweenMax;
const ScrollMagic = window.ScrollMagic;

class About extends Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    this.scene = new ScrollMagic.Scene({
      triggerElement: "#about",
      offset: 100
    })
      .setTween(
        TweenMax.staggerFromTo(
          [".about-title", ".about-desc"],
          1,
          {
            y: 40,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1
          },
          0.5
        )
      )
      .addTo(this.controller);

    this.scene = new ScrollMagic.Scene({
      triggerElement: "#about",
      offset: 100
    })
      .setTween(
        TweenMax.from(".about-image", 1, {
          right: -33
        })
      )
      .addTo(this.controller);
  }

  render() {
    return (
      <div className='container-fluid p-5'>
        <div id='about' className='anchor' />
        <div className='row'>
          <div className='col-md-6 p-0 about-text'>
            <h1 className='text-left about-title black-text section-title mt-5'>
              WHO WE ARE
            </h1>
            <h5 className='py-3 about-desc answer'>
              <em>
                We here at Benexgen are a cohesive team , all hell-bent to
                provide you your dream website and content . Whatever your needs
                , from web development , to content writing , we've got it all
                covered for you . Our team is fully focused and always ready to
                provide solutions and custom-make your website to suit your
                personality and skill.
              </em>
            </h5>
          </div>
          <div className='col-md-6 p-0 about-image'>
            <img
              width='100%'
              height='100%'
              src='./images/about.png'
              alt='aboutImage'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
