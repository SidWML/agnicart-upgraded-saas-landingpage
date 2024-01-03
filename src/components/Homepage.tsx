"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HomeSectionTwo from './homapage/HomeSectionTwo';
import HomeSectionThree from './homapage/HomeSectionThree';
import HomeSectionFour from './homapage/HomeSectionFour';
import HomeSectionFive from './homapage/HomeSectionFive';
import HomeSectionSix from './homapage/HomeSectionSix';
import HomeSectionSeven from './homapage/HomeSectionSeven';
import HomeSectionEight from './homapage/HomeSectionEight';
import HomeSectionNine from './homapage/HomeSectionNine';
import BuilderSection from './pages/BuilderSection';
import Marque from './pages/Marque';
import BlogListPage from './pages/resources/blogs/BlogListPage';

gsap.registerPlugin(ScrollTrigger);

export default function Homepage({blogs}) {
  const [hydrated, setHydrated] = useState(false);
useEffect(() => {
    setHydrated(true);
},[])

  const [strapiBlogs, setStrapiBlogs] = useState(blogs);

  useEffect(() => {
    setStrapiBlogs(blogs)
  }, [])
  

  useEffect(() => {
const tl =gsap.timeline({
  scrollTrigger:{
    trigger:".main-heading",
    start:"-200px",
    scrub:0.3
  }
})
  tl.fromTo(".tilt", { transform:"perspective(1200px) translateX(0px) translateY(2.75362px) scale(0.924155) rotate(0deg) rotateX(50.3768deg) rotateY(0deg) translateZ(0px)" }, { transform:"perspective(1200px) translateX(0px) translateY(33.838px)", duration:2 })
    gsap.fromTo('.main-heading', { translateY: '50px', opacity: 0 }, { duration: 1, translateY: '0px', opacity: 1 });
  }, []);

  return (
    <div className=" ">
      <div  className=" bg w-full   flex md:items-center z-[999] items-center md:py-[150px] py-[100px]  bg-[black] ">
        <div className="w-[80%] m-auto text-white h-[max-content] space-y-8 relative">
          <div className="main-heading relative w-full space-y-8 flex md:items-center items-center flex-col z-[4]">
            <h1 className="  lg:text-[5vw] md:text-[7vw] lg:leading-[75px] md:leading-[60px] leading-[40px] md:text-center text-center text-[10vw] w-full font-bold">
              Website builder that's gonna shake the game rules up
            </h1>
            <p className="text-center font-medium lg:w-[60%] z-[2] w-full mx-auto md:text-xl text-md">
              Our dream: everyone can create a website with no special skills required. Join the waitlist to make it a reality very soon.
            </p>
            <Link className=" px-6 py-2 bg-[#0077ed] z-[4] font-medium text-md " href="/register">
              Start building
            </Link>
          </div>
          <div style={{transform:"perspective(1200px) translateX(0px) translateY(2.75362px) scale(0.924155) rotate(0deg) rotateX(50.3768deg) rotateY(0deg) translateZ(0px)"}} className=" tilt relative lg:w-[70%] w-[90%] mx-auto z-[2]">
            <div className="w-full h-full">
              <img src="/mockup-1.png" alt="" className="" />
            </div>
            <div className=" absolute z-[2]   bottom-[5%] left-[-5%] w-[20%]   ">
              <img src="/image-43.png" alt="" className=" max-w-full max-h-full object-cover" />
            </div>
            <div className=" absolute bottom-[-15%] right-[-10%] w-[25%] h-[max-content]">
              <img src="/landing-hero-front.png" alt="" className="  max-w-[100%] max-h-full object-cover" />
            </div>
            <div className="  w-[18%] absolute top-[8%] right-5">
              <img src="/image-39-1.png" alt="" className="" />
            </div>
          </div>
          <div
            style={{ filter: 'blur(100px)' }}
            className=" min-w-[50%] z-[1] min-h-[50%] bg-red-500 absolute top-[50%] rounded-full -translate-y-[50%] left-[50%] -translate-x-[50%]"
          />
        </div>
      </div>
      <BuilderSection />
      {/* <HomeSectionTwo /> */}
      <HomeSectionFour />
      <Marque />
      <HomeSectionThree />
      <HomeSectionFive />
      <HomeSectionSix />
      <HomeSectionSeven />
      <HomeSectionEight />
      { hydrated && <BlogListPage strapiBlogs={strapiBlogs} />}
      <HomeSectionNine bg="bg-black" gradientBg="bg-red-500" />
    </div>
  );
}
