import React from "react";
import Landing from "./Landing";

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow-${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);

export default Arrow;
