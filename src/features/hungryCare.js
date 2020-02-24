import React, { Component } from "react";
import { Container, Button } from "@material-ui/core";
import { isMobile } from "react-device-detect";
import YouTube from "react-youtube";
class HungryCare extends Component {
  render() {
    return (
      <Container
        style={{
          display: "flex",
          flex: 1,

          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}>
        <YouTube
          videoId={"mUojBhwmW58"}
          opts={{
            height: isMobile / 2 ? 150 : 390,
            width: isMobile ? window.innerHeight / 2 : 640
          }}
        />
        <a href='https://hungrycare.benexgen.com'>
          <Button variant='contained' color='primary'>
            Learn More
          </Button>
        </a>
      </Container>
    );
  }
}

export default HungryCare;
