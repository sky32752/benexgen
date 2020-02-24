import React, { Component } from "react";
import Particles from "react-particles-js";

class Particle extends Component {
  render() {
    return (
      <div>
        <Particles
          style={{
            background: "linear-gradient(to right bottom, #141e30  , #243b55)",
            // zIndex: -1,
            position: "absolute"
          }}
          params={{
            particles: {
              number: {
                value: 55
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />

        <br />
      </div>
    );
  }
}

export default Particle;
