import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import React, { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function LandingBanner({mainHeading, description, link,href,img, bgGradient}) {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-heading',
        start: '-200px',
        scrub: 0.3,
      },
    });
    tl.fromTo('.tilt', { transform: 'perspective(1200px) translateX(0px) translateY(2.75362px) scale(0.924155) rotate(0deg) rotateX(50.3768deg) rotateY(0deg) translateZ(0px)' }, { transform: 'perspective(1200px) translateX(0px) translateY(33.838px)', duration: 2 });
    gsap.fromTo('.main-heading', { translateY: '50px', opacity: 0 }, { duration: 1, translateY: '0px', opacity: 1 });
    // gsap.fromTo('.bg', { clipPath:"circle(0% at 50% 0)" }, {clipPath:"circle(100% at 50% 0)", duration: 1.5,  });
  }, []);
  return (
    <div className=" bg w-full  h-[max-content] flex md:items-center z-[999] items-center mt:py-[150px] pt-[100px] pb-[30px]  bg-[black] ">
      <div className="w-[80%] m-auto text-white h-[max-content] pt-[60px] space-y-8 relative">
        <div className="main-heading relative w-full space-y-8 flex md:items-center items-center flex-col z-[4]">
          <h1 className="  lg:text-[5vw] md:text-[7vw] lg:leading-[75px] md:leading-[60px] leading-[40px] md:text-center text-center text-[10vw] w-full font-bold">
            {mainHeading}
          </h1>
          <p className=" md:text-center text-center font-medium lg:w-[70%] z-[2] w-full mx-auto md:text-xl text-md">
            {description}
          </p>
          <Link className=" px-6 py-2 bg-[#0077ed] z-[4] font-medium text-md " href="/register">
            {link}
          </Link>
        </div>
        <div style={{ transform: 'perspective(1200px) translateX(0px) translateY(2.75362px) scale(0.924155) rotate(0deg) rotateX(50.3768deg) rotateY(0deg) translateZ(0px)' }} className=" tilt relative lg:w-[70%] w-[90%] mx-auto z-[2]">
          <div className="w-full h-full">
            <img src={img} alt="" className="" />
          </div>
        </div>
        <div
          style={{ filter: 'blur(100px)' }}
          className={` min-w-[50%] z-[1] min-h-[50%] ${bgGradient} absolute top-[50%] rounded-full -translate-y-[50%] left-[50%] -translate-x-[50%]`}
        />
      </div>
    </div>
  );
}
