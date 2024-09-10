// src/components/About.js
import React from "react";
import "./About.css"; // Import the CSS file

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">About Us</h1>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          aspernatur officiis quidem aperiam quis accusantium odio unde
          consequatur vero minima quae, ratione adipisci, veritatis ullam
          obcaecati sequi. Qui, vero ipsam? About
        </p>
        <br />
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ut
          quidem distinctio expedita ratione aliquam iure veritatis quod dolor,
          facere suscipit ipsum modi, tenetur nam. Maxime labore deleniti
          debitis perferendis.
        </p>
      </div>
    </div>
  );
}
