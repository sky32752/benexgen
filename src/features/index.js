import React from "react";

const Features = () => (
  <div className="features border-bottom">
    <div id="features" className="anchor" />
    <h1 className="text-center section-title mt-5">OUR WORK</h1>
    <h6 className="text-mutted">
      We like to let our work speak for itself. Take a look at our selected
      stories for digital transformation and end-to-end software product
      development, both with the most enjoyable UX.
    </h6>
    <div className="container-fluid">
      <div className="row">
        <ul>
          <li>Hungrycare</li>
          <li>Edurial</li>
        </ul>
      </div>
    </div>
  </div>
);

// const Item = ({ title, icon}) => (
//    <div className="py-5 d-flex flex-column align-center justify-content-center">
//       <div className="avatar justify-content-center hvr-radial-out"><i className={icon}></i></div>
//       <p className="d-block features-text text-center">{title}</p>
//     </div>
// );

export default Features;
