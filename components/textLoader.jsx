
"use client";

import React from "react";

const ShimmerLoader = ({ text = "Loading..." }) => {
  return <div className="loader" data-text={text}></div>;
};

export default ShimmerLoader;

