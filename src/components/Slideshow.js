import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Button from "./ui/button";

const images = [
  "https://via.placeholder.com/400x200?text=Slide+1",
  "https://via.placeholder.com/400x200?text=Slide+2",
  "https://via.placeholder.com/400x200?text=Slide+3",
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-bold mb-2">Slideshow</h2>
        <img src={images[index]} alt={`Slide ${index + 1}`} className="rounded-xl" />
        <div className="mt-2 flex gap-2">
          <Button onClick={() => setIndex((index - 1 + images.length) % images.length)}>Prev</Button>
          <Button onClick={() => setIndex((index + 1) % images.length)}>Next</Button>
        </div>
      </CardContent>
    </Card>
  );
}
