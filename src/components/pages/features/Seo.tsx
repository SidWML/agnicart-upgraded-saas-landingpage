"use client"
import React from 'react';
import LandingBanner from './LandingBanner';
import GridSections from './GridSections';
import BuilderSection from '../BuilderSection';
import BottomBanner from '../BottomBanner';
import Grids from './Grids';

export default function Seo() {
  const cards = [
    {
      card_1_bg: 'bg-[#B70404]',
      card_1_color: 'text-white',
      card_1_main_heading: 'Analytics',
      card_1_description: 'Our website analytics tool provides a comprehensive suite of features that empower you to gain valuable insights into your website\'s performance. Monitor and analyze key metrics to understand visitor behavior, track conversions, and optimize your online presence effectively. ',
      card_1_image: '/features/analytics.webp',
    }, {
      card_2_bg: 'bg-black ',
      card_2_color: 'text-white',
      card_2_main_heading: 'Meta Data',
      card_2_description: 'By optimizing your meta data descriptions, you can improve click-through rates, drive organic traffic, and enhance your website\'s overall search engine optimization (SEO) performance',
      image: true,
      card_2_image: '/features/meta tags.webp',
    }, {
      card_3_bg: 'bg-[#edeae8]',
      card_3_color: 'text-black',
      card_3_main_heading: 'Semantics',
      card_3_description: 'Our Templates are written using Semantics. This can improve your website\'s visibility and rankings in search engine results',
      card_3_image: '/features/semantic.png',
    },
    {
      card_4_bg: 'bg-[#afe8ff]',
      card_4_color:"text-black dark:text-black",
      card_4_main_heading: 'Server Side Renderings ',
      card_4_description: 'Search engines can easily crawl and index server-rendered pages since the HTML content is readily available. This improves the discoverability and visibility of your website in search engine results.',
      card_4_image: '/features/ssr.webp',
    },
    {
      card_5_main_heading: 'Hosting',
      card_5_description: 'You can Host your Websites for Free and load your sites fast and get accessed anywhere',
      card_5_image: '/features/hosting.webp',
      card_5_bg: 'bg-[#c1f458]',
      card_5_color: 'text-black',
    },

  ];
  return (
    <div className=" overflow-hidden">
      <LandingBanner
        bgGradient="bg-gradient-to-t from-orange-400 to-sky-400 "
        mainHeading="Accelerate Website Development with Effortless Designing"
        description="Craft Your Website on an Intuitive, Flexible Canvas. Effortlessly Configure Breakpoints for Responsive Web Design"
        link="Optimize SEO"
        href="/register"
        img="/das-3.png"
      />
      <div className="bg-white dark:bg-black text-black dark:text-white ">
        <div className=" lg:w-[90%] mx-auto px-6 py-[60px]">
          <GridSections
            mainHeading="Captivating Designs. Fluid Layouts."
            textGd="bg-gradient-to-t from-orange-400 to-sky-400 bg-clip-text text-transparent"
            description=" Harness the Power of Intuitive Tools to Create Your Ultimate Website Design. Effortlessly Import Designs from Figma, Employ Flexible Grids & Stacks, Leverage Absolute Positioning, and Seamlessly Fine-Tune Breakpoints for Flawless Responsiveness on Any Screen Size"
          />
          <Grids cards={cards} />
        </div>
      </div>

      <BuilderSection />
      <BottomBanner
        bg="bg-gradient-to-t from-orange-400 to-sky-400"
        mainHeading=" Unleashing E-commerce Excellence for Your Online Store"
        description="Experience the Power of Agnicart and Build a Feature-Rich E-commerce Website with Ease"
      />
    </div>
  );
}
