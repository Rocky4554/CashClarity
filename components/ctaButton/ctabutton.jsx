import React from "react";
import "./ctabutton.css"; // put your CSS here

export default function ShinyButton({ text = "Click Me", icon }) {
  return (
    <button className="button">
      {text}
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
}
