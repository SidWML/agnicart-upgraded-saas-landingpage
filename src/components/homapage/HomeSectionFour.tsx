import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import LinkButton from '../generics/Link';
import Typography from '../generics/Typography';

gsap.registerPlugin(ScrollTrigger);

export default function HomeSectionFour() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.h-s-4',
        start: '-400px',
      },
    });
    tl.fromTo('.section-four-text', { y: '50px', opacity: 0 }, { y: '0px', opacity: 1, duration: 1.5 });
  }, []);

  return (
    <div className=" relative h-s-4">
      <div className=" max-h-[100vh]  lg:h-[100vh]">
        <video src="/vide-1.mp4" className="max-h-full w-full object-cover" muted autoPlay loop />
      </div>
      <div className="  space-y-6 absolute top-[0%] left-0 bottom-0 right-0 flex flex-col items-center justify-center text-center  text-white bg-black bg-opacity-25 lg:px-20 p-4">
      <div className=" section-four-text">
      {
        Typography({
          type: 'Jumbotron',
          mainHeading: 'Ready to go live? Just hit publish — no rebuilding, no code.',
        })
    }
      </div>
        <LinkButton href="/register" mainInnerText="Get Started" />
      </div>

    </div>
  );
}
