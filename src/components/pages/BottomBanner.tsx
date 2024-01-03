import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Typography from '../generics/Typography';
import LinkButton from '../generics/Link';

gsap.registerPlugin(ScrollTrigger);

export default function BottomBanner({ bg, mainHeading, description }) {
  useEffect(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.bottom-blog-banner',
        start: '-400px',
      },
    });

    tl2.fromTo('.img-1', { x: '200px', opacity: 0 }, { x: '0px', opacity: 1, duration: 0.5 });
    tl2.fromTo('.img-2', { x: '-200px', opacity: 0 }, { x: '0px', opacity: 1, duration: 0.5 }, '<');
  }, []);
  return (
    <div className=" w-full bottom-blog-banner ">
      <div className={`${bg}`}>
        <div className="  mx-auto lg:px-0 px-6 grid md:grid-cols-2 grid-cols-1 gap-8 py-[60px] lg:w-[90%]  w-full">
          <div className=" flex items-center justify-center">
            <div className="  flex flex-col md:items-start col-span-1 space-y-4 text-white">
              <Typography type="Sub-Main-Heading" mainHeading={mainHeading} description={description} />
              <LinkButton mainInnerText="Get Started" href="/register" />
            </div>
          </div>
          <div className=" col-span-1 flex items-center justify-center relative ">
            <img src="/templates/color.jpg" alt="" className="img-1 z-[2] max-w-[50%]" />
            <img src="/templates/Revel.jpg" alt="" className=" absolute z-[4] max-w-[60%]" />
            <img src="/templates/Light.jpg" alt="" className="img-2 z-[2] max-w-[50%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
