import React, { Component } from "react";
import Particle from "./particles";

import Typed from "react-typed";
import { Typography } from "@material-ui/core";
import { isMobile } from "react-device-detect";

class subHeader extends Component {
  render() {
    // const defaultOptions = {
    //   loop: true,
    //   autoplay: true,
    //   animationData: animationData,
    //   rendererSettings: {
    //     preserveAspectRatio: "xMidYMid slice"
    //   }
    // };

    return (
      <div
        style={{
          minHeight: "85vh",
          display: "flex",
          flex: 1,
          flexDirection: "column"
        }}>
        <Particle />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Typography
            variant='h4'
            style={{
              zIndex: 1,
              color: "white"
            }}>
            We can help you with
          </Typography>

          <Typed
            style={{
              fontSize: isMobile ? 23 : 35,
              zIndex: 1,
              color: "orange",
              fontFamily: "Courier New, monospace"
            }}
            strings={[
              "Software",
              "Incredible Website",
              "Mobile Applications",
              "Seo",
              "Digital Marketing",
              "Graphics Designing",
              "Hosting and much more"
            ]}
            typeSpeed={70}
            backSpeed={100}
            backDelay={1}
            smartBackspace
            loop
          />
        </div>
        {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
      </div>
    );
  }
}

export default subHeader;
