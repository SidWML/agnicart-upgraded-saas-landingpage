"use client"
import React from 'react';
import BuilderSection from '../BuilderSection';
import BottomBanner from '../BottomBanner';
import Grids from './Grids';
import GridSections from './GridSections';
import LandingBanner from './LandingBanner';

export default function ContentManagementSystem() {
  const cards = [
    {
      card_1_bg: 'bg-gradient-to-r from-pink-400 to-pink-600',
      card_1_color: 'text-white',
      card_1_main_heading: 'Content Collections',
      card_1_description: 'Manage your entire website data from one place like orders, users, jobs and many more. ',
      card_1_image: '/features/cms-2.webp',
    }, {
      card_2_bg: 'bg-black ',
      card_2_color: 'text-white',
      card_2_main_heading: 'CMS Dynamic Pages',
      card_2_description: 'You can set up a template for your individual collections and can create pages for the dynamic products',
      image: true,
      card_2_image: '/features/cms-1.webp',
    }, {
      card_3_bg: 'bg-gradient-to-r from-teal-200 to-lime-200',
      card_3_color: 'text-black',
      card_3_main_heading: 'Input Types',
      card_3_description: 'You can choose inputs based on your requirement and content',
      card_3_image: '/features/cms-3.webp',
    },
    {
      card_4_bg: 'bg-[white]',
      card_4_color:"dark:text-black text-black",
      card_4_main_heading: 'Toggle ',
      card_4_description: 'You can Hide and Show contents based on Conditions',
      card_4_image: '/features/cms-5.webp',
    },
    {
      card_5_main_heading: 'Collections List',
      card_5_description: 'You can create multiple collections and manage them individually ,from our cms dashboard',
      card_5_image: '/features/cms-6.png',
      card_5_bg: 'bg-[#884A39]',
      card_5_color: 'text-white',
    },

  ];

  return (
    <div className=" overflow-hidden">
      <LandingBanner
        bgGradient="bg-gradient-to-r from-blue-400 to-emerald-400 "
        mainHeading="
        Effortless Content Creation: Empowering Your Website's Growth"
        description="Our CMS empowers you to craft engaging content that resonates with your audience and drives results. Leverage customizable templates and layouts to maintain consistency and showcase your brand's unique voice"
        link="Manage Content"
        href="/register"
        img="/das-3.png"
      />
      <div className=" bg-white dark:bg-black text-black dark:text-white">
        <div className=" lg:w-[90%] mx-auto px-6 py-[60px]">
          <GridSections
            mainHeading="Simple Interface, Surprising Power: Edit and Transform Content with Ease"
            textGd="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
            description=" With our CMS, you can achieve a dynamic and personalized website experience without sacrificing ease of use. Embrace simplicity while harnessing the surprising power of content editing and transformation, and deliver an exceptional user experience to your audience"
          />
          <Grids cards={cards} />
        </div>
      </div>
      <BuilderSection />
      <BottomBanner
        bg="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
        mainHeading=" Unleashing E-commerce Excellence for Your Online Store"
        description="Experience the Power of Agnicart and Build a Feature-Rich E-commerce Website with Ease"
      />
    </div>
  );
}
