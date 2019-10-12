import React, { Component } from "react";

import Features from "./features";
import Services from "./services";
import About from "./about";
import Contact from "./contact";
import { Footer } from "./common";
import Header from "./header";
import SubHeader from "./header/subHeader";

const contacts = {
  email: "hello@wwwizard.com",
  call: "7005155031",
  address: "Nongthymmai, Shillong, Meghalaya - 793014",
  company: "WWWizard"
};

const ScrollMagic = window.ScrollMagic;

class App extends Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    this.scene = new ScrollMagic.Scene({
      offset: "100"
    })
      .setClassToggle("#header", "fixed-header")
      .addTo(this.controller);
  }

  render() {
    return (
      <div>
        <Header />
        <SubHeader />
        <Services />
        <Features />
        <About />
        <Contact details={contacts} />
        <Footer details={contacts} />
      </div>
    );
  }
}

export default App;
