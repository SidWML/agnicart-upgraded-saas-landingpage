"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TemplateFilters from './TemplateFilters';
import WebsiteSelection from './WebsiteSelection';
import Marque from '../../Marque';

gsap.registerPlugin(ScrollTrigger);

export default function Templates() {
  useEffect(() => {
    gsap.fromTo('.template-heading', { translateY: '50px', opacity: 0 }, { duration: 1, translateY: '0px', opacity: 1 });
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
    <div className=" ">
      <div className=" w-full   flex md:items-center z-[5] items-center md:pt-[150px] pt-[100px]  bg-[black] relative ">
        <div className="w-[80%] template-heading m-auto z-[5] text-white h-[max-content] space-y-8 relative">
          <div className=" relative w-full space-y-8 flex md:items-center items-center flex-col z-[2]">
            <h1 className=" lg:text-[5vw] md:text-[7vw] lg:leading-[85px] relative z-[3] md:leading-[60px] leading-[40px] md:text-center text-center text-[10vw] w-full font-bold">
              Website Templates For Creatives and Businesses
            </h1>
            <p className=" text-center font-medium lg:w-[60%] z-[3] relative w-full mx-auto md:text-xl text-md">
              Our dream: everyone can create a website with no special skills required. Join the waitlist to make it a reality very soon.
            </p>
            <Link className=" px-6 py-2 bg-[#0077ed] relative z-[2] font-medium text-md " href="/register">
              Start building
            </Link>
          </div>

        </div>
        <div className=" absolute top-0 bottom-0 right-0 z-[1] left-0 bg-gradient-to-t from-black to-[#7B2869] via-black bg-opacity-30" />
      </div>
      <div className=" bg-black w-full text-white">
        <TemplateFilters />
      </div>
      <Marque />
      <WebsiteSelection />
    </div>
  );
}
