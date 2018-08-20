import React from "react";
import { Link } from "react-router-dom";
import Landing from "./Landing";

const Imageslide = ({ url }) => {
  let styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div className="image-slide" style={styles}>
      <img src={styles.backgroundImage} />
    </div>
  );
};

export default Imageslide;
