import React from "react";
import "./Card.css";

import gt3Image1 from "../assets/Engine.jpg";
import gt3Image2 from "../assets/Interior.jpg";
import gt3Image3 from "../assets/Speed.jpg";
import gt3Image4 from "../assets/Performance.jpg"; // Add another image

const cardData = [
  {
    image: gt3Image1,
    title: "Engine",
    description: "A naturally aspirated 4.0L flat-six engine producing 502 hp.",
  },
  {
    image: gt3Image2,
    title: "Interior",
    description: "Touring package removes the rear wing for a sleek look.",
  },
  {
    image: gt3Image3,
    title: "Speedometer",
    description: "Driver-focused cockpit with Alcantara and carbon fiber trims.",
  },
  {
    image: gt3Image4,
    title: "Performance",
    description: "0-60 mph in 3.2 seconds with an advanced aerodynamics package.",
  },
];

function Card() {
  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;