"use client"
import React from 'react';
import LandingBanner from './LandingBanner';
import GridSections from './GridSections';
import Grids from './Grids';
import BuilderSection from '../BuilderSection';
import BottomBanner from '../BottomBanner';

export default function Navigation() {
  const cards = [
    {
      card_1_bg: 'bg-[#c364fb]',
      card_1_color: 'text-white',
      card_1_main_heading: 'Navigation Links',
      card_1_description: 'Effortlessly incorporate hyperlinks throughout your content, allowing visitors to navigate your website seamlessly',
      card_1_image: '/features/link-1.png',
    }, {
      card_2_bg: 'bg-black ',
      card_2_color: 'text-white',
      card_2_main_heading: 'Pages',
      card_2_description: 'you have the control and flexibility to create, rename, and redirect pages, empowering you to craft a dynamic and user-friendly website',
      card_2_image: '/features/link-4.mp4',
    },
    {
      card_3_bg: 'bg-[#ffda39]',
      card_3_color: 'text-white',
      card_3_main_heading: 'Redirects',
      card_3_description: 'Effortlessly redirect visitors to different pages, sections, or external URLs with just a few clicks',
      card_3_image: '/features/link-2.webp',
    },
    {
      card_4_bg: 'bg-[white]',
      card_4_color:"dark:text-black text-black",
      card_4_main_heading: ' Hovers',
      card_4_description: 'When users hover over a link, they will be treated to a visually appealing and informative preview of the linked content',
      card_4_image: '/features/vid-2.gif',
    }, 
    {
      card_5_main_heading: 'Overlaying',
      card_5_description: 'With customizable designs, engaging visuals, and compelling calls-to-action, pop-ups are powerful tools for capturing user attention and driving conversions',
      card_5_image: '/features/pop-ups.webp',
      card_5_bg: 'bg-[#c8dcfe]',
    },
  ];
  return (
    <div className=" overflow-hidden">
      <LandingBanner
        bgGradient="bg-gradient-to-r from-amber-500 to-pink-500 "
        mainHeading="Simplify Navigation and Page Organization"
        description="With our website builder, you can effortlessly structure your pages and create links within a few clicks. Enjoy the convenience of automatic updates to all your links when page names are changed, ensuring a seamless user experience."
        link="Set up Navigation"
        href="/register"
        img="/das-3.png"
      />
      <div className=" bg-white dark:bg-black text-black dark:text-white">
        <div className=" lg:w-[90%] mx-auto px-6 py-[60px]">
          <GridSections
            mainHeading="Seamlessly Navigate Your Site and Guide Users Wherever You Want"
            textGd="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent"
            description=" With our intuitive website builder, you have complete control over navigation. Whether you need to link to another page, direct users to a specific section within a page, or open a modal for important information, our visual navigation tools make it a breeze. Empower your users with effortless exploration of your website"
          />
          <Grids cards={cards} />
        </div>
      </div>
      <BuilderSection />
      <BottomBanner
        bg="bg-gradient-to-r from-indigo-400 to-cyan-400"
        mainHeading=" Unleashing E-commerce Excellence for Your Online Store"
        description="Experience the Power of Agnicart and Build a Feature-Rich E-commerce Website with Ease"
      />
    </div>
  );
}
