import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import LinkButton from '../generics/Link';
import Typography from '../generics/Typography';


gsap.registerPlugin(ScrollTrigger);

export default function BuilderSection() {
  const [featured, setFeatured] = useState(0);
  const builder = [
    {
      title: 'Header Builder',
      description: 'Design your header as unique as possible and assign it to your website pages.',
      featured_image: '/builder/Header-Builder-1.jpg',
    },
    {
      title: 'Footer Builder',
      description: 'Create ideal footer designs using templates and customize them with your style.',
      featured_image: '/builder/Footer-Builder-1.jpg',
    },
    {
      title: 'Single Post Builder',
      description: 'Design more engaging single post pages for each different story.',
      featured_image: '/builder/Single-Post-Builder-1.jpg',
    },
    {
      title: 'Single Product Builder',
      description: 'Take advantage of design options for your single product and take it to the next level',
      featured_image: '/builder/Single-Product-Builder-2.jpg',
    },
    {
      title: 'Archive Builder',
      description: 'Organize and sort the layout of all archive pages with all the available options.',
      featured_image: '/builder/Archive-Builder-1.jpg',
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.builder',
        start: '-600px',
      },
    });
    tl.fromTo('.builder', { y: '200px', opacity: 0 }, { y: '0px', opacity: 1, duration: 1, transformOrigin:"left" });
  }, []);

  return (
    <div className=" builder  relative bg-white dark:bg-white">
      <div className=" lg:w-[90%] py-[60px] mx-auto space-y-8  w-full px-6
      "
      >
       <div  className=" w-full overflow-hidden">
       <div className="w-full  flex flex-col lg:items-start items-center lg:text-start text-center  space-y-6 text-black dark:text-black ">
          {
                Typography({
                  type: 'Jumbotron',
                  mainHeading: 'Everything You Need To Build a Stunning Website',
                  description: 'Time to build a complete, modern, and incredible website in your own style without having to touch a single line of code.',
                })
            }
          <LinkButton href="/register" color="text-white" mainInnerText="Get Started" />
        </div>
       </div>
        <div className=" grid lg:grid-cols-6 grid-cols-1 w-full gap-12">
          <div className=" lg:col-span-2 col-span-1 w-full gap-4 flex flex-col">
            {
                    builder.map((build, index) => (
                      <div key={index} style={{ boxShadow: featured === index && '0 15px 35px 5px rgba(0,103.00000000000009,255,.1)' }} onClick={() => setFeatured(index)} className={`p-4  ${featured === index ? '' : ' border-b-2 '}  space-y-2 overflow-hidden cursor-pointer font-poppins`}>
                        <h1 className={` font-medium text-2xl ${featured === index ? ' text-blue-500' : ' text-black dark:text-black '}`}>{build.title}</h1>
                        <div className={`${featured === index ? ' h-[100px] opacity-100' : ' h-0 opacity-0'} duration-300 space-y-4 ease-linear`}>
                          <p className=" font-medium text-slate-600">{build.description}</p>
                          <Link className="group block text-slate-700 font-medium text-sm space-x-1" href="/resources/tutorials">
                            <span className="">Learn now</span>
                            <FontAwesomeIcon className=" -rotate-45 group-hover:rotate-0 duration-300 ease-linear" icon={faArrowRight} />
                            {' '}
                          </Link>
                        </div>
                      </div>
                    ))
                }
          </div>
          <div className=" lg:col-span-4 col-span-1 w-full h-full">
            <img src={builder[featured].featured_image} alt="" className=" w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
