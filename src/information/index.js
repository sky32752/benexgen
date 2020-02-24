import React, { Component } from "react";
import { Card, Typography } from "@material-ui/core";
import { isMobile } from "react-device-detect";

class CommitmentSection extends Component {
  render() {
    const info = [
      {
        id: 1,
        title: "Being Different",
        desc:
          "You are unique , and so should be the product you recieve , and we make sure we deliver on time , We Promise",
        icon: require("../img/left.png")
      },
      {
        id: 2,
        title: "Breaking The Rules",
        desc:
          "After all , rules will be broken in order to create unique things , great ideas require out of the box thinking .",
        icon: require("../img/rules.png")
      },
      {
        id: 3,
        title: "Product Quality",
        desc:
          "When you are hell - bent on being the best , how can we lack on that . We make sure you recieve the best products",
        icon: require("../img/shield.png")
      }
    ];

    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "center"
        }}>
        {info.map(data => {
          return (
            <Card
              key={data.id}
              style={{
                margin: "5vh",

                maxWidth: isMobile ? null : "50vw",
                maxHeight: isMobile ? null : "30vh",
                borderRadius: 10,
                boxShadow:
                  "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
              }}>
              <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#ededed"
                  }}>
                  <img
                    alt={data.title}
                    style={{ margin: "10px", height: "70px", width: "70px" }}
                    src={data.icon}
                  />
                </div>
                <div>
                  <Typography
                    variant='h6'
                    style={{
                      color: "gray",
                      margin: "10px",
                      fontFamily: "Helvetica, sans-serif"
                    }}>
                    {data.title}
                  </Typography>

                  <Typography
                    style={{ margin: "10px", fontFamily: "Arial, sans-serif" }}>
                    {data.desc}
                  </Typography>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default CommitmentSection;
