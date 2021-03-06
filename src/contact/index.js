import React, { Component } from "react";
import "./mail.js";

const TweenMax = window.TweenMax;
const ScrollMagic = window.ScrollMagic;

const emailUrl =
  " https://script.google.com/macros/s/AKfycbwb1Pj4mce6-1HIB3YhfRJEGGAfjhC49d0OQzbxtw/exec";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    this.scene = new ScrollMagic.Scene({
      triggerElement: "#contact",
      offset: 100
    })
      .setTween(
        TweenMax.staggerFromTo(
          [".ctext", ".details"],
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
      triggerElement: "#contact",
      offset: 100
    })
      .setTween(TweenMax.from(".cform", 1, { left: -33 }))
      .addTo(this.controller);
  }

  render() {
    const { details } = this.props;
    return (
      <div
        style={{
          backgroundImage: `url(${require("../img/map.jpg")})`,

          backgroundSize: "cover"
        }}
        className='container-fluid p-5'>
        <div id='contact' className='anchor' />
        <div className='row'>
          <div className='cform col-md-6'>
            <div className='inner-wrapper'>
              <form className='gform' action={emailUrl} method='POST'>
                <input
                  required
                  className='form-elements input mb-3'
                  name='Name'
                  type='text'
                  placeholder='Your Name'
                />
                <input
                  required
                  className='form-elements input mb-3'
                  type='text'
                  name='Contact'
                  placeholder='Mobile Number'
                />
                <textarea
                  required
                  className='form-elements input mb-3'
                  name='message'
                  placeholder='Message'></textarea>
                <button id='button' className='btn submit-btn' type='submit'>
                  <p id='icon' className='m-0 lnr lnr-chevron-right'>
                    {" "}
                    Submit
                  </p>
                </button>

                <div style={{ display: "none" }} className='thankyou_message'>
                  <p>
                    <em>Thank You!</em> We will get back to you soon
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-6 justify-content-center d-flex flex-column pl-5 pt-5 mt-5'>
            <h2 style={{ color: "white" }} className='mb-4 blue-text ctext'>
              Got a big idea? Let us help you turn your dream into software!
            </h2>
            <p className='font-16 details'>
              <i className='glyphicon glyphicon-search'>njnjnjj</i>
            </p>
            <p className='font-16 details'>
              <i className='mr-3 fa fa-mobile'></i>
            </p>
            <p className='font-16 details'>
              <i className='mr-3 fa fa-map-marker-alt'></i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
