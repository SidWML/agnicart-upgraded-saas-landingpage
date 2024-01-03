"use client"
import React from 'react';
import LandingBanner from './LandingBanner';
import GridSections from './GridSections';
import BuilderSection from '../BuilderSection';
import BottomBanner from '../BottomBanner';
import Grids from './Grids';

export default function DesignLayouts() {
  const cards = [
    {
      card_1_bg: 'bg-white',
      card_1_color: 'dark:text-black text-black',
      card_1_main_heading: 'Grid and Layouts',
      card_1_description: 'Crafting visually stunning websites has never been easier. Our powerful grid and layout tools empower you to effortlessly create pixel-perfect designs that captivate your audience. With a wide range of flexible grid options.',
      card_1_image: '/features/grid.png',
    }, {
      card_2_bg: 'bg-orange-400 ',
      card_2_main_heading: 'Drag Drop and Edit Canvas',
      card_2_description: 'No more struggling with complex coding or limited design options. Our drag, click, and edit canvas provides a user-friendly interface that puts you in control.',
      card_2_image: '/features/vid-1.mp4',
      card_2_color: 'text-white',
    }, {
      card_3_bg: 'bg-gradient-to-b from-stone-900 via-gray-900 to-zinc-500',
      card_3_main_heading: 'Components and Elements Alignment',
      card_3_description: 'Create Harmonious Visual Structures with Precise Component Alignments for an Exceptional Website Experience.',
      card_3_image: '/features/position.png',
      card_3_color: 'text-white',
    }, {
      card_4_bg: 'bg-[white]',
      card_4_color: 'dark:text-black text-black',
      card_4_main_heading: ' Dynamic Page Insertion and Component Creation',
      card_4_description: 'Take your website development process to new heights with our powerful tools for inserting pages and creating custom components.',
      card_4_image: '/features/pages.png',
    }, {
      card_5_main_heading: 'Powerful Styling',
      card_5_description: 'From typography and color schemes to spacing and visual effects, our platform provides you with the power to create visually captivating and cohesive designs.',
      card_5_image: '/features/styling.png',
      card_5_bg: 'bg-[#30A2FF]',
      card_5_color: 'text-white',
    },
  ];

  return (
    <div className=" overflow-hidden">
      <LandingBanner
        bgGradient="bg-gradient-to-r from-rose-600 to-indigo-600 "
        mainHeading="Accelerate Website Development with Effortless Designing"
        description="Craft Your Website on an Intuitive, Flexible Canvas. Effortlessly Configure Breakpoints for Responsive Web Design"
        link="Design Layouts"
        href="/register"
        img="/das-3.png"
      />
      <div className=" bg-white dark:bg-black text-black dark:text-white ">
        <div className=" lg:w-[90%] mx-auto px-6 py-[60px]">
          <GridSections
            mainHeading="Captivating Designs. Fluid Layouts."
            textGd="bg-gradient-to-r from-rose-600 to-indigo-600 bg-clip-text text-transparent"
            description=" Harness the Power of Intuitive Tools to Create Your Ultimate Website Design. Effortlessly Import Designs from Figma, Employ Flexible Grids & Stacks, Leverage Absolute Positioning, and Seamlessly Fine-Tune Breakpoints for Flawless Responsiveness on Any Screen Size"
          />
          <Grids cards={cards} />
        </div>
      </div>

      <BuilderSection />
      <BottomBanner
        bg="bg-gradient-to-r from-amber-400 to-orange-600"
        mainHeading=" Unleashing E-commerce Excellence for Your Online Store"
        description="Experience the Power of Agnicart and Build a Feature-Rich E-commerce Website with Ease"
      />
    </div>
  );
}
