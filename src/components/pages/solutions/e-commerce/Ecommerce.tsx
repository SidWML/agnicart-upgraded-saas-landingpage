"use client"
import React, { useEffect, useState } from 'react';

import Banner from '../../Banner';
import Marque from '../../Marque';
import HeroSection from '../../HeroSection';
import TemplatesSection from '../../TemplatesSection';
import BuilderSection from '../../BuilderSection';
import CheckoutDesign from '../../CheckoutDesign';
import HomeSectionSix from '../../../homapage/HomeSectionSix';
import HomeSectionSeven from '../../../homapage/HomeSectionSeven';
import HomeSectionNine from '../../../homapage/HomeSectionNine';
import TemplateFilters from '../../resources/templates/TemplateFilters';
import HomeSectionThree from '../../../homapage/HomeSectionThree';



export default function Ecommerce({ type }) {
  
  return (
    <div className="">
      <div className="bg-black relative w-full  text-white">
        <Banner
          bgGradient="bg-gradient-to-t from-[gray] to-[black]"
          mainHeading="Set Up Your Magnificiant Ecommerce Store Quickly & Easily"
          description="The easiest and fastest way to design a high quality website. Start building your website and show it to everyone."
          img="/ecom-1.png"
          mainInnerText="Create a store now"
        />
        <div className=" absolute top-0 bottom-0 right-0 z-[1] left-0 bg-gradient-to-t from-black to-[#7a6354] via-black bg-opacity-30" />
      </div>
      <HomeSectionThree />
      <div className="  bg-[#cd9b70] text-white">
        <HeroSection
          mainHeading="Start selling through your own online store"
          description="Activate the integrated ecommerce store and start selling within minutes on your Agnicart website. Your online ecommerce store will have the same visual look and feel as the rest of your website, and your customers would get a seamless experience while browsing your site and buying from your store."
        />
      </div>
      <div className=" bg-gradient-to-t text-white pb-8 via-black from-[black] to-[#333]">
        <TemplatesSection vid="/ecom-8.mp4" />
        <TemplateFilters filterType="fashion" />
      </div>
      <Marque />
      <BuilderSection />
      {/* <CheckoutDesign mainHeading="Checkouts" /> */}
      <HomeSectionSix type={type} />
      <HomeSectionSeven />
      <HomeSectionNine bg="bg-gradient-to-r from-[#3A1078] to-[#2F58CD]" />
    </div>
  );
}
