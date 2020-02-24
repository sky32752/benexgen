import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Container } from "@material-ui/core";

export default class Clients extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img alt='sdsd' src={require("../img/app.png")} />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img alt='dsd' src='./img/app.png' />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <img alt='dsd' src='./img/app.png' />
          <p className='legend'>Legend 3</p>
        </div>
      </Carousel>
    );
  }
}
