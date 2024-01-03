import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HomeSectionTwo() {
  const dasboardData = [
    {
      icon: '/vector.png',
      title: "You don't need design skills",
      desc: " Our smart layout engine will adapt to your content automatically. If you'd like to adjust something, just drag a slider!",
    },
    {
      icon: '/code.png',
      title: "You don't need to code",
      desc: ' Take full control of your new website. Keep things nic and simple, or go deep and fine-tune the appearance of your fonts, colors, spacing and more.',
    },

    {
      icon: '/concept.png',
      title: 'Tons of presets',
      desc: ' Bring your website to life by picking from a huge selection of illustrations, images, videos and icons.',
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.h-s-2',
        start: '-400px',
      },
    });
    tl.fromTo('.section-two-img', { x: '-50px', opacity: 0 }, { x: '0px', opacity: 1, duration: 1.5 });
    tl.fromTo('.section-two-text', { x: '50px', opacity: 0 }, { x: '0px', opacity: 1, duration: 1.5 }, "<");
  }, []);

  return (
    <div  className=" bg-[#f0ebe3] overflow-hidden">
      <div className="md:w-[95%] w-full h-s-2 mx-auto  p-4 grid lg:grid-cols-3 grid-cols-1  ">
        <div className=" lg:col-span-2 section-two-img col-span-1">
          <img src="/das-2r.png" alt="" className=" drop-shadow-xl" />
        </div>
        <div className=" w-full section-two-text text-black dark:text-black  gap-5 flex flex-col col-span-1 lg:py-[100px] py-6">
          <div className="  w-full space-y-3 lg:text-start text-center">
            <h1 className=" font-bold text-3xl ">The Website Builder for Startups</h1>
            <p className=" font-light text-md">
              A good visual editor balances flexibility and ease-of-use. Our powerful editor helps you focus on your copy while also giving you advanced
              customization.
            </p>
          </div>
          <div className="  grid lg:grid-cols-1  md:grid-cols-2 gap-4">
            {dasboardData.map((data,index) => (
              <div key={index} className=" flex md:flex-row flex-col  hover:shadow-lg gap-4 duration-300  transition-all ease-linear p-4 ">
                <div className=" mt-1 min-w-[30px] max-w-[30px] ">
                  <img src={data.icon} alt="" className=" w-full " />
                </div>
                <div className="">
                  <h1 className=" font-medium text-lg">{data.title}</h1>
                  <p className=" font-light text-sm">{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
