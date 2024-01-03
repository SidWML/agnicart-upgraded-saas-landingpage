import React, { useEffect } from 'react';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
import Typography from '../generics/Typography';


gsap.registerPlugin(ScrollTrigger);

export default function HomeSectionThree() {
  const threeSteps = [
    {
      image: '/demo-1.png',
      title: 'Choose a design',
      description: 'Make your website stand out with templates that are right for your industry and ideas.',
    },
    {
      image: '/demo-2.png',
      title: 'Add your content',
      description: 'Add your flair and make it yours. Customize the template, add text, and images.',
    },
    {
      image: '/demo-3.png',
      title: 'Publish your site',
      description: 'All set? Hit Publish and your site will be online on your own domain (web address).',
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.h-s-3',
        start: '-400px',
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-three-text',
        start: '-50px',
        end:"100%",
        scrub:0.3
      },
    });

    // tl2.to('.section-three-text',{ y: '200px', opacity: 1, duration: 1.5});
      tl.fromTo(".h-s-3", { y:"50px", opacity:0 }, {  y:"0px", opacity:1, duration:1.5,  })


  }, []);

  return (
    <div className="    bg-white dark:bg-black">
      <div className="py-[60px] h-s-3 px-6 lg:w-[90%] w-full mx-auto ">
        <div className=" overflow-hidden">
        <div className=" lg:w-[70%] text-black dark:text-white section-three-text lg:m-0 mx-auto lg:text-start text-center space-y-2 ">
          {Typography({
            type: 'Jumbotron',
            mainHeading: 'Create a website in three steps',
            description: ' Build something awesome for your business, your portfolio, or yourself.',
          })}
          <Link className=" px-6 block py-2 font-medium w-[max-content] lg:m-0 mx-auto text-white text-md bg-[#0077ed]" href="">
            Get Started
          </Link>
        </div>
        </div>
        <div className=" w-full md:p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
          {threeSteps.map((step,index) => (
            <div key={index} style={{ boxShadow: 'rgba(0,0,0,0.3) 0 1px 3px ' }} className=" p-5 section-three-card w-full  rounded-3xl mt-4 hover:bg-[#deecfa] dark:hover:bg-[white] text-black dark:text-white hover:dark:text-black duration-300 ease-linear ">
              <div className="">
                <img src={step.image} alt="" className="" />
              </div>
              <div className=" space-y-4 p-4 w-full md:text-start text-center">
                {Typography({
                  type: 'Sub-Main-Heading',
                  mainHeading: `${step.title}`,
                  description: `${step.description}`,
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
