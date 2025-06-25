import React, { useState } from "react";

const images = [
  process.env.PUBLIC_URL +"/images/photo1.png",
  process.env.PUBLIC_URL +"/images/photo2.png",
  process.env.PUBLIC_URL +"/images/photo3.png",
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  return (
    <div className="slideshow-container">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="slideshow-image"
      />
      <div className="slideshow-controls">
        <button
          className="slideshow-button"
          onClick={() => setIndex((index - 1 + images.length) % images.length)}
        >
          Prev
        </button>
        <button
          className="slideshow-button"
          onClick={() => setIndex((index + 1) % images.length)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
