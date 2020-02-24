import React from "react";
import { Container, Typography } from "@material-ui/core";
import { isMobile } from "react-device-detect";
import Lottie from "react-lottie";
import animationData from "../img/startup.json";

class Startup extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <Container
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          marginTop: 50
        }}>
        <Container>
          {" "}
          <Lottie options={defaultOptions} />
        </Container>

        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "linear-gradient(to right bottom, #757f9a  , #d7dde8)",
            justifyContent: "center",
            borderRadius: 20
          }}>
          <Typography variant='h3' style={{ color: "white", marginBottom: 20 }}>
            We Empower Startups
          </Typography>
          <Typography variant='subtitle1' style={{ color: "white" }}>
            Startup is power , it is freedom , its independence , and above all
            , it's revolutionary Imagine not having to break your neck in order
            to earn a living in a cliche 9 to 5 job , or having to worry about
            the college placements , in order to realise your worth . A
            successful startup can get you all this . But , there is something
            more to these , something that can impact thousands of lives in a
            positive way . That is the actual purpose of a startup . So if
            you're a revolutionary , a person with a vision , and if you think ,
            your ideas can change the world . We are here to help you out with
            it . We will take care of the proceedings , you shall only need to
            focus on your goals . So come join as , and make your ideas a
            reality !
          </Typography>
        </Container>
      </Container>
    );
  }
}

export default Startup;
