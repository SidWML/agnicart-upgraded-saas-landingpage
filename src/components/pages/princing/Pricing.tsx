"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import HomeSectionEight, { pricing } from '../../homapage/HomeSectionEight';
import HomeSectionSeven from '../../homapage/HomeSectionSeven';
import Typography from '../../generics/Typography';
import BottomBanner from '../BottomBanner';

export default function Pricing() {
  useEffect(() => {
    gsap.fromTo('.pricing', { translateY: '50px', opacity: 0 }, { duration: 1, translateY: '0px', opacity: 1 });
  }, []);

  return (
    <div className="">
      <div className=" w-full  bg-gradient-to-b from-[#11009E] to-[#343435] dark:to-[black] flex md:items-center z-[5] items-center md:pt-[150px] pt-[100px] pb-[30px]  relative  ">
        <div className="w-[80%] m-auto text-white z-[3] h-[max-content] space-y-8 relative flex flex-col">
          <div className=" w-full pricing space-y-8 flex items-center flex-col z-[2]">
            <h1 className=" lg:text-[5vw] md:text-[7vw] lg:leading-[85px] relative z-[3] md:leading-[60px] leading-[40px] text-center text-[7vw] w-full font-bold">
              Experience the Freedom of Free Website Creation, Upgrade for Extraordinary Features
            </h1>
            <p className=" text-center font-medium lg:w-[90%] z-[3] relative w-full mx-auto md:text-xl text-md">
              Our website builder offers you the freedom to create a stunning website without any upfront cost. Begin your journey with our free plan, where you can design and launch a beautiful website in minutes. As your needs grow, our flexible monthly pricing allows you to unlock additional features and advanced functionality.
            </p>
            <Link className=" px-6 py-2 bg-[#0077ed] relative z-[2] text-white font-medium text-md " href="/register">
              Get Started -
              {' '}
              <span className=" text-md font-light">It's Free</span>
            </Link>
          </div>

        </div>
      </div>
      <HomeSectionEight />
      
      <HomeSectionSeven />
      <BottomBanner
        bg="bg-gradient-to-r from-[#7B2869] to-orange-600"
        mainHeading=" Unleashing E-commerce Excellence for Your Online Store"
        description="Experience the Power of Agnicart and Build a Feature-Rich E-commerce Website with Ease"
      />
    </div>
  );
}
