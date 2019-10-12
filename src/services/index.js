import React, { Component } from "react";

const TweenMax = window.TweenMax;
const ScrollMagic = window.ScrollMagic;

class Services extends Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    this.scene = new ScrollMagic.Scene({
      triggerElement: "#services"
    })
      .setTween(
        TweenMax.staggerFromTo(
          [".services-title", ".service-tag", ".service"],
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
  }

  render() {
    return (
      <section className="container-fluid section" id="services">
        <h2 className="services-title">
          BUILDING DISRUPTIVE SOFTWARE <br /> WITH THE USER IN MIND
        </h2>
        <p className="service-tag text-muted p-5">
          Our team helps organizations thrive in this digital era by creating
          products from scratch or modernizing current applications.
        </p>
        <div className="row">
          <div className="service col-md-6 p-5">
            <svg
              fill="#4d4d4d"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 75 40.1"
              width="111"
              height="60"
            >
              <path
                className="st0"
                d="M75 34.7V40H62.7c0-.5.1-1.1.1-1.6 0-14.3-11.4-25.9-25.3-25.9-14 0-25.3 11.6-25.3 25.9 0 .5 0 1.1.1 1.6H0v-5.3h7.5c.3-3 1-5.9 2.1-8.6l-6.4-3.8L6.8 16l6.5 3.8c1.7-2.4 3.8-4.5 6.1-6.2L15.6 7l6.2-3.7 3.7 6.5c2.6-1.1 5.4-1.8 8.4-2.1V0h7.2v7.7c2.9.4 5.8 1 8.4 2.1l3.7-6.6L59.3 7l-3.7 6.6c2.3 1.8 4.3 3.9 6.1 6.2l6.5-3.8 3.6 6.4-6.4 3.8c1.1 2.7 1.8 5.6 2.1 8.6H75z"
              ></path>
              <path
                className="st0"
                d="M37.5 23.5c8 0 14.6 6.7 14.6 14.9 0 .6 0 1.1-.1 1.6h-5.7c.1-.5.1-1.1.1-1.6 0-5.1-4-9.2-9-9.2-4.9 0-9 4.1-9 9.2 0 .6.1 1.1.1 1.6H23c-.1-.5-.1-1.1-.1-1.6 0-8.2 6.6-14.9 14.6-14.9z"
              ></path>
            </svg>
            <h4>Product Development</h4>
            <p className="text-muted">We can build your ideas from scratch</p>
            <svg
              fill="#4d4d4d"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 75 49.9"
              width="91"
              height="60"
            >
              <path class="st0" d="M24.8 36.4h25.6v7.8H24.8z"></path>
              <path
                className="st0"
                d="M31.2 43.5H44v6.4H31.2zM68.5 0c-1.9 10.4-9.1 19.4-19.3 23.7l-2 .8v5.7h-6.4V18L52.7 6.1l-4.5-4.5-10.6 10.5L27 1.6l-4.5 4.5L34.4 18v12.3H28v-5.7l-2-.8C15.7 19.4 8.5 10.4 6.5 0H0c1.9 12.3 9.9 23.1 21.6 28.7v7.9h32v-7.9C65.2 23.1 73.1 12.4 75 0h-6.5z"
              ></path>
            </svg>
          </div>
          <div className="service col-md-6 p-5">
            <svg
              fill="#4d4d4d"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 111 60"
              width="111"
              height="60"
            >
              <path d="M95.77119 38.10608l6.75505-3.26027-.50885 25.17362-3.15888-2.27847-16.8031-12.13573 7.08141-3.74347c-7.34085-17.8721-28.84405-29.91255-50.17233-20.5187-11.41337 5.10147-22.30885 15.80934-22.79889 38.6571l-7.7388-.0325C8.5013 32.6795 24.23638 20.0459 36.07286 14.19546 53.62517 5.45897 81.40168 8.9469 95.77119 38.10608z"></path>
            </svg>
            <h4>Digital Transformation</h4>
            <p className="text-muted">We can help to improve your business</p>
            <svg
              fill="#4d4d4d"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 75 40.1"
              width="111"
              height="60"
            >
              <path
                className="st0"
                d="M75 5.3V0H62.7c0 .5.1 1.1.1 1.6 0 14.3-11.4 25.9-25.3 25.9-14 0-25.3-11.6-25.3-25.9 0-.5 0-1.1.1-1.6H0v5.3h7.5c.3 3 1 5.9 2.1 8.6l-6.4 3.8L6.8 24l6.5-3.8c1.7 2.4 3.8 4.5 6.1 6.2L15.7 33l6.2 3.7 3.7-6.5c2.6 1.1 5.4 1.8 8.4 2.1V40h7.2v-7.7c2.9-.4 5.8-1 8.4-2.1l3.7 6.6 6.2-3.7-3.7-6.6c2.3-1.8 4.3-3.9 6.1-6.2l6.5 3.8 3.6-6.4-6.4-3.8c1.1-2.7 1.8-5.6 2.1-8.6H75z"
              ></path>
              <path
                className="st0"
                d="M37.5 16.6c8 0 14.6-6.7 14.6-14.9 0-.6 0-1.1-.1-1.6h-5.7c.1.5.1 1.1.1 1.6 0 5.1-4 9.2-9 9.2-4.9 0-9-4.1-9-9.2 0-.6.1-1.1.1-1.6H23c-.1.5-.1 1.1-.1 1.6 0 8.2 6.6 14.9 14.6 14.9z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
