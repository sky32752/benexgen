import React from "react";

import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src: require("../img/yogacookingclasses.png"),
    thumbnail: require("../img/yogacookingclasses.png"),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    tags: [
      { value: "Yogacookingclass", title: "Yogacookingclass" },
      { value: "Goa", title: "Goa" }
    ]
  },
  {
    src: require("../img/viawork.png"),
    thumbnail: require("../img/viawork.png"),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    tags: [
      { value: "Viawork", title: "Viawork" },
      { value: "Udaipur", title: "Udaipur" }
    ]
  },

  {
    src: require("../img/Educareful.png"),
    thumbnail: require("../img/Educareful.png"),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    tags: [
      { value: "Educareful", title: "Educareful" },
      { value: "Nigeria", title: "Nigeria" }
    ]
  },
  {
    src: require("../img/hungrycare.png"),
    thumbnail: require("../img/hungrycare.png"),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    tags: [
      { value: "Hungrycare", title: "Hungrycare" },
      { value: "Meghalaya", title: "Meghalaya" }
    ]
  },
  {
    src: require("../img/sasscaffoldings.png"),
    thumbnail: require("../img/sasscaffoldings.png"),
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    tags: [
      { value: "Sasscaffoldings", title: "Sasscaffoldings" },
      { value: "Australia", title: "Australia" }
    ]
  }
];

export default class WebDevelopment extends React.Component {
  render() {
    return (
      <div style={{ paddingBottom: 100 }}>
        <Gallery images={IMAGES} backdropClosesModal={true} />;
      </div>
    );
  }
}
