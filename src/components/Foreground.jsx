import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const constraintsRef = useRef(null);
  const data = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      storage: "0.4",
      downloadIcon: true,
    },
    {
      title: "sit amet consectetur adipisicing elit.",
      storage: "0.9",
      downloadIcon: false,
    },
    {
      title: "perspiciatis quisquam! Ea vero eaque consequuntur inventore.",
      storage: "2.8",
      downloadIcon: true,
    },
  ];

  return (
    <div ref={constraintsRef} className="fixed top-0 left-0 z-50 w-full h-full">
      <div className="md:flex gap-6">
        {data.map((details) => (
          <Card data={details} ref={constraintsRef} />
        ))}
      </div>
    </div>
  );
};

export default Foreground;
