"use client"
import Link from 'next/link';

import React, { useEffect } from 'react';
import Input from '../../generics/Input';
import { gsap } from 'gsap';

export default function Tutorials() {
  useEffect(() => {
    gsap.fromTo('.tutorials', { translateY: '50px', opacity: 0 }, { duration: 1, translateY: '0px', opacity: 1 });
  }, []);

  return (
    <div className="">
      <div className=" w-full   flex md:items-center z-[5] items-center md:py-[150px] py-[100px]  relative  ">
        <div className="w-[80%] m-auto text-white z-[3] h-[max-content] space-y-8 relative flex flex-col">
          <div className=" w-full tutorials space-y-8 flex md:items-center items-center flex-col z-[2]">
            <h1 className=" lg:text-[5vw] md:text-[7vw] lg:leading-[85px] relative z-[3] md:leading-[60px] leading-[40px] md:text-center text-center text-[7vw] w-full font-bold">
              Empower Yourself with our Page Builder Video Tutorials - Master Website Design in Minutes!
            </h1>
            <p className=" md:text-center text-center font-medium lg:w-[90%] z-[3] relative w-full mx-auto md:text-xl text-md">
              Dive into our comprehensive video tutorials that demonstrate how to harness the full potential of our page builder. Learn the ins and outs of designing stunning websites effortlessly, all without writing a single line of code. From layout customization to adding interactive elements, our step-by-step guides will have you creating professional websites with ease. Unleash your creativity and become a website design pro in no time with our intuitive drag-and-drop page builder
            </p>
            <Link className=" px-6 py-2 bg-[#0077ed] relative z-[2] font-medium text-md " href="/register">
              Start Building
            </Link>
          </div>
          <div className=" w-full ">
            <video src="/tutorials/vid-1.mp4" muted autoPlay loop alt="" className=" w-full" />
          </div>
        </div>
        <div className=" absolute top-0 bottom-0 right-0 z-[-1] left-0 bg-gradient-to-t from-[black] to-violet-700 via-[#333] bg-opacity-30" />
      </div>
      <div className=" bg-black text-white pb-12">
        <div className=" w-full lg:w-[90%]   mx-auto space-y-6 px-6">
          <h1 className=" font-medium text-3xl py-3 border-b  ">Tutorials</h1>
          <div className=" w-full grid lg:grid-cols-5 grid-cols-1 gap-8">
            <div className=" lg:col-span-3 col-span-1">
              <video className="w-full h-full" muted autoPlay loop src="/tutorials/vid-1.mp4" />
            </div>
            <div className=" lg:col-span-2 col-span-1 space-y-6 p-4 lg:border-l border-slate-700">
              <h1 className=" font-medium py-3 border-b border-slate-700  ">
                Videos
              </h1>
              <div className=" w-full flex flex-col gap-4 h-[500px] overflow-y-scroll">
                <div className="flex gap-4 rounded-xl bg-slate-900 hover:bg-slate-700 p-4 ">
                  <div className="max-w-[20%] ">
                    <video className="w-full h-full" src="/tutorials/vid-1.mp4" />
                  </div>
                  <div className="">
                    <h1 className=" font-medium  text-xl">How to get started?</h1>
                  </div>
                </div>
                <div className="flex gap-4 rounded-xl bg-slate-900 hover:bg-slate-700 p-4 ">
                  <div className="max-w-[20%] ">
                    <video className="w-full h-full" src="/tutorials/vid-1.mp4" />
                  </div>
                  <div className="">
                    <h1 className=" font-medium  text-xl">Can you explain what is the onboarding process?</h1>
                  </div>
                </div>
                <div className="flex gap-4 rounded-xl bg-slate-900 hover:bg-slate-700 p-4 ">
                  <div className="max-w-[20%] ">
                    <video className="w-full h-full" src="/tutorials/vid-1.mp4" />
                  </div>
                  <div className="">
                    <h1 className=" font-medium  text-xl">How to customise main menu?</h1>
                  </div>
                </div>
                <div className="flex gap-4 rounded-xl bg-slate-900 hover:bg-slate-700 p-4 ">
                  <div className="max-w-[20%] ">
                    <video className="w-full h-full" src="/tutorials/vid-1.mp4" />
                  </div>
                  <div className="">
                    <h1 className=" font-medium  text-xl">How to add and manage products in Agnicart?</h1>
                  </div>
                </div>
                <div className="flex gap-4 rounded-xl bg-slate-900 hover:bg-slate-700 p-4 ">
                  <div className="max-w-[20%] ">
                    <video className="w-full h-full" src="/tutorials/vid-1.mp4" />
                  </div>
                  <div className="">
                    <h1 className=" font-medium  text-xl">How to customise footer menu?</h1>
                  </div>
                </div>
                <div className="flex gap-4 rounded-xl bg-slate-900 hover:bg-slate-700 p-4 ">
                  <div className="max-w-[20%] ">
                    <video className="w-full h-full" src="/tutorials/vid-1.mp4" />
                  </div>
                  <div className="">
                    <h1 className=" font-medium  text-xl">How to add carousal to home page?</h1>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className=" bg-slate-100 dark:bg-black dark:text-white text-black">
        <div className=" lg:w-[90%] px-6 w-full py-[60px] mx-auto ">
          <div className=" space-y-4 lg:w-[30%] md:w-[80%] w-full">
            <div className=" flex flex-col space-y-5  ">
              <label className="text-2xl font-medium" htmlFor="question">Have Queries? Need Help ?</label>
              <Input placeholder="Ask question" />
            </div>
            <div className=" flex flex-col space-y-3  ">
              <label className="text-lg font-medium" htmlFor="question">Description</label>
              <textarea placeholder="description" className="border p-4 bg-white dark:bg-[#2b2b2b] focus:outline-blue-500 rounded-xl" name="" id="" cols="30" rows="10" />
            </div>
            <button type="submit" className="px-6 py-2 bg-[#0077ed] font-medium  text-white">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
