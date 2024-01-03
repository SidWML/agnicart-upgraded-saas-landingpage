"use client"
import React from 'react';
import Banner from '../../Banner';
import Marque from '../../Marque';
import BuilderSection from '../../BuilderSection';
import HomeSectionSix from '../../../homapage/HomeSectionSix';
import HomeSectionSeven from '../../../homapage/HomeSectionSeven';
import HomeSectionNine from '../../../homapage/HomeSectionNine';

export default function Customization({ type }) {
  return (
    <div className="">
      <div className=" bg-[black] relative   text-white">
        <Banner
          bgGradient=""
          mainHeading="You can Customize Your Website Easily with our User Friendly Page Builder"
          description="The easiest and fastest way to design a high quality website. Start building your website and show it to everyone."
          img="/customization/page-builder.png"
          mainInnerText="Start Customizing"
        />
        <div className=" absolute top-0 bottom-0 right-0 z-[1] left-0 bg-gradient-to-t from-black to-[#3C79F5] via-black bg-opacity-30" />
      </div>
      <Marque />
      <BuilderSection />
      <div className="w-full relative  md:h-[90vh] bg-[#6e6d6e] ">
        <video muted autoPlay loop className=" w-full h-full object-cover" src="/customization/vid-1.mp4" />
      </div>
      <HomeSectionSix type={type} />
      <HomeSectionSeven />
      <HomeSectionNine bg="bg-gradient-to-r from-[#E76161] to-[#F99B7D]" />
    </div>
  );
}
