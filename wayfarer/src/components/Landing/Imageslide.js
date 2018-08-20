import React from "react";
import { Link } from "react-router-dom";
import Landing from "./Landing";

const Imageslide = ({ url }, city) => {
  let styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%"
  };

  return (
    <div className="image-slide" style={styles}>
      <h2>City</h2>
    </div>
  );
};

export default Imageslide;
