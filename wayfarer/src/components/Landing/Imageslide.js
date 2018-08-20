import React from "react";

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
    </div>
  );
};

export default Imageslide;
