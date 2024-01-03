import React, { useEffect } from 'react';
import Typography from '../generics/Typography';
import LinkButton from '../generics/Link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ mainHeading, description }) {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.sell',
        start: '-600px',
      },
    });
    tl.fromTo('.sell', { y: '200px', opacity: 0 }, { y: '0px', opacity: 1, duration: 1 });
  }, []);

  return (
    <div className="  relative">
      <div className=" lg:w-[90%] py-[60px] mx-auto space-y-8  w-full px-6
      "
      >
        <div className=" w-full overflow-hidden">
        <div className="w-full sell flex items-center flex-col text-center space-y-6  ">
          <Typography type="Jumbotron" mainHeading={mainHeading} description={description} />
          <LinkButton color="text-white" mainInnerText="Get Started" href="/register" />
        </div>
        </div>
        <div className=" flex flex-col gap-5">
        <div className=" grid grid-cols-10 lg:gap-5 gap-3 ">
          <div className=" col-span-2 w-full">
            <img src="/ecommerce/p.png" alt="" className=" max-w-full max-h-full object-cover" />
          </div>
          <div className=" col-span-6  w-full h-full">
            <img src="/ecommerce/hs.png" alt="" className=" w-full h-full object-cover" />
          </div>
          <div className=" col-span-2  w-full h-full flex items-center justify-center">
            <img src="/ecommerce/m.png" alt="" className=" max-w-full max-h-full m-auto object-cover" />
          </div>
        </div>
        <div className=" grid grid-cols-3 lg:gap-5 gap-3">
          <div className=" col-span-1 w-full flex items-center justify-center">
            <img src="/ecommerce/c.png" alt="" className=" max-w-full max-h-full object-cover" />
          </div>
          <div className=" col-span-1  w-full h-full flex items-center justify-center">
            <img src="/ecommerce/pd.png" alt="" className=" max-w-full max-h-full object-cover" />
          </div>
          <div className=" col-span-1  w-full h-full flex items-center justify-center">
            <img src="/ecommerce/pl.png" alt="" className=" max-w-full max-h-full m-auto object-cover" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
