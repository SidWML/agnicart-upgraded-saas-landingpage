
import React, { useEffect, useRef } from 'react';

export default function Marque() {
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    marqueeRef.current.stop(); // Stop the marquee animation
  };

  const handleMouseLeave = () => {
    marqueeRef.current.start(); // Start the marquee animation
  };
  return (
    <marquee ref={marqueeRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="font-bold text-7xl  font-poppins stroke marque w-full py-12" behavior="scroll" direction="left" scrollamount="20">
      <div className=" flex items-center space-x-12">
        {
            Array.from({ length: 10 }, (element,index) => (
              <span key={index} className="">100+ TEMPLATES</span>
            ))
        }
      </div>
    </marquee>
  );
}
