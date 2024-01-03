"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import CustomerCard from './CustomerCard';
import BottomBanner from './BottomBanner';

export default function Customers() {
  const customers = [
    {
      name: 'Arhaa by Vaishali',
      url: 'https://www.arhaabyvaishali.com/',
      thumbnail: '/customers/ar.png',
    },
    {
      name: 'Ashna Vaswani',
      url: 'https://www.ashnavaswani.com/',
      thumbnail: '/customers/av.png',
    },
    {
      name: 'Cute Things',
      url: 'https://www.cutethings.in/',
      thumbnail: '/customers/ct.png',
    },
    {
      name: 'Dhwaja',
      url: 'https://www.dhwaja.in/',
      thumbnail: '/customers/dh.png',
    },
    {
      name: 'Neetu Rohra',
      url: 'https://www.neeturohra.in/',
      thumbnail: '/customers/nr.png',
    },
    {
      name: 'Neopaleo',
      url: 'https://www.labelneopalaeo.com/',
      thumbnail: '/customers/np.png',
    },
    {
      name: 'Prakash Corporates',
      url: 'https://www.wacachikankariartisans.com/',
      thumbnail: '/customers/wc.png',
    },
    {
      name: 'Uni Mask',
      url: 'https://www.unimask.in/',
      thumbnail: '/customers/um.png',
    },
  ];

  useEffect(() => {
    gsap.fromTo('.cutomers', { translateY: '50px', opacity: 0 }, { duration: 1, translateY: '0px', opacity: 1 });
  }, []);

  return (
    <div className="">
      <div className=" w-full   flex md:items-center z-[5] items-center md:pt-[150px] pt-[100px] pb-[30px]  relative  ">
        <div className="w-[80%] m-auto text-white z-[3] h-[max-content] space-y-8 relative flex flex-col">
          <div className=" w-full cutomers space-y-8 flex items-center  flex-col z-[2]">
            <h1 className=" lg:text-[5vw] md:text-[7vw] lg:leading-[85px] relative z-[3] md:leading-[60px] leading-[40px] text-center text-[7vw] w-full font-bold">
              Website Excellence Unleashed" - Explore the masterpieces crafted by our esteemed customers.
            </h1>
            <p className=" text-center font-medium lg:w-[60%] z-[3] relative w-full mx-auto md:text-xl text-md">
              Inspiring Websites that Make a Statement" - Be inspired by the remarkable websites created by our loyal customers
            </p>
            <Link className=" px-6 py-2 bg-[#0077ed] relative z-[2] font-medium text-md " href="/register">
              Start Building
            </Link>
          </div>
        </div>
        <div className=" absolute top-0 bottom-0 right-0 z-[-1] left-0 bg-gradient-to-t from-black to-violet-700 via-black bg-opacity-30" />
      </div>
      <div className=" w-full bg-black">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:w-[90%] w-full px-6 py-[60px] mx-auto gap-8">
          {
            customers.map((customer) => (
              <CustomerCard customer={customer} />
            ))
        }
        </div>
      </div>
      <BottomBanner
        bg="bg-gradient-to-r from-indigo-400 to-cyan-400"
        mainHeading=" Unleashing E-commerce Excellence for Your Online Store"
        description="Experience the Power of Agnicart and Build a Feature-Rich E-commerce Website with Ease"
      />
    </div>
  );
}
