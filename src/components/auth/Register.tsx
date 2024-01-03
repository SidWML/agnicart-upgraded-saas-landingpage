"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Input from '../generics/Input';

// Import Swiper styles
import 'swiper/css';
import SwiperCore, { Pagination } from 'swiper/core';
import LinkButton from '../generics/Link';
import UseDarkTheme from '../layout/UseDarkTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([Pagination]);

export default function Register() {
  const [signedUp, setSignedUp] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [colorTheme,setMode] = UseDarkTheme()

  const handleSubmit = (e) => {
    e.preventDefault();
    let values = {};
    Object.keys(e.target).forEach((key) => {
      const { name, value } = e.target[key];
      if (e.target[key].name) {
        values = { ...values, [name]: value };
      }
    });
    setSignedUp(true);
  };

  const signUpQueries = [
    {
      title: 'What best describes your role?',
      description: "We'll help you get started based on your responses.",
      options: [
        'Web designer', 'Product designer', 'Developer', 'Marketer', 'Entrepreneur', '​Other',
      ],
    },
    {
      title: 'What do you want to build today?',
      description: "We'll help you get started based on your responses.",
      options: [
        'Business site',
        '​Ecommerce store',
        '​Portfolio',
        'Blog',
        '​Other',
        'I’m just testing Agnicart out',
      ],
    },

  ];

  const handleContinue = () => {
    if (swiper && activeSlide < signUpQueries.length - 1) {
      setActiveSlide(activeSlide + 1);
      swiper.slideNext();
    }
  };

  return (
    <div className=" bg-white dark:bg-black text-black dark:text-white">
      <div className="lg:w-[90%] w-full px-6 mx-auto p-4 flex items-center justify-between">
        <Link href="/"><img src="https://www.agnicart.com/static/images/logo/agni-cart.png" alt="" className="" /></Link>
        <div className=" flex items-center space-x-4">
        <div className=" font-medium text-md text-white">
          <LinkButton href="/login" mainInnerText="Log In" />
        </div>
        <label style={{boxShadow:"inset rgba(0,0,0,0.3) 0px 1px 3px"}} htmlFor="dark-mode-switch" className=" flex items-center justify-between  dark:text-white  w-[50px] rounded-2xl relative h-[25px]  border dark:border-slate-700 border-slate-200">
              <div onClick={() => setMode('light')} className={`${colorTheme === 'dark' ? ' bg-[#d7f5f2]  text-white ' : '  text-black dark:text-white'} w-[50%] h-[25px]  rounded-full flex items-center justify-center`}> <img src="/sun.png" alt="" className=" w-[15px] h-[15px]" /> </div>
              <div onClick={() => setMode('dark')} className={`${colorTheme === 'light' ? ' bg-[#383737] text-white' : ' '} w-[50%] h-[25px]  rounded-full flex text-black items-center justify-center`}><FontAwesomeIcon icon={faMoon} /></div>
            </label>
        </div>
      </div>
      <div className=" w-full  flex items-center justify-center  min-h-[90vh] ">
        {
        !signedUp ? (
          <div className="lg:w-[32%] md:w-[65%] w-[95%]  overflow-hidden  ">
            <div className="w-full p-6 space-y-6">
              <h1 className=" font-bold text-3xl  w-full text-center">Create an Account</h1>
              <div className="w-full space-y-3   ">
                <Link style={{ boxShadow: 'rgba(0,0,0,0.3) 0px 1px 3px' }} className="  rounded-xl bg-[#eeeeef] dark:bg-[#2f2f2f] space-x-2 flex font-normal  items-center justify-center  p-3 border dark:border-black  w-full" href="">
                  <img src="/google.png" alt="" className=" w-[20px] h-[20px]" />
                  <span className="">Sign up using Google </span>
                  {' '}
                </Link>
                <Link style={{ boxShadow: 'rgba(0,0,0,0.3) 0px 1px 3px' }} className="  rounded-xl bg-[#eeeeef] dark:bg-[#2f2f2f] space-x-2 flex font-normal  items-center justify-center  p-3 border dark:border-black  w-full" href="">
                  <img src="/fb.png" alt="" className=" w-[20px] h-[20px]" />
                  <span className="">Sign up using Facebook </span>
                  {' '}
                </Link>

              </div>
              <div className=" flex items-center justify-between  w-full ">
                <div className="w-[45%] h-[0.9px] bg-slate-300" />
                <span className="block">OR</span>
                <div className="w-[45%] h-[0.9px] bg-slate-300" />
                <hr />
              </div>
              <div className=" space-y-2">
                <form onSubmit={handleSubmit} className=" space-y-6 ">
                  <Input required label="First Name" name="first-name" type="text" placeholder="First Name" bgColor="bg-slate-100" />
                  <Input required label="First Name" name="last-name" type="text" placeholder="Last Name" bgColor="bg-slate-100" />
                  <Input required label="First Name" name="email" type="email" placeholder="Email" bgColor="bg-slate-100" />
                  <Input required label="Password" name="password" type="password" placeholder="Password" bgColor="bg-slate-100" />

                  <button type="submit" className="px-6 py-3 rounded-xl text-white hover:bg-[#0269d0] text-center w-full bg-[#0077ed] font-medium ">Sign Up</button>

                </form>
                <div className=" flex items-center justify-between">
                  <Link href="/login" className=" font-light text-sm underline text-slate-700 dark:text-slate-300">Already have an account ?</Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:w-[30%] md:w-[70%] w-[95%]  overflow-hidden  rounded-3xl ">
            <div className=" w-full h-full  flex items-center justify-center ">
              <img src="https://www.agnicart.com/static/images/logo/agni-cart.png" alt="" className=" block w-[40%]  object-cover" />
            </div>
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              slidesPerView={1}
              onSwiper={setSwiper}
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
              className=" mx-auto mySwiper "
            >
              {
                signUpQueries.map((queries,index) => (
                  <SwiperSlide key={index} className=" w-full">
                    <div className=" px-6 py-8 space-y-8 flex flex-col items-center ">
                      <div className=" space-y-2 w-full text-center">
                        <h1 className=" font-medium text-2xl ">
                          {queries.title}
                        </h1>
                        <p className=" font-medium ">
                          {queries.description}
                        </p>
                      </div>
                      <div className="flex flex-col md:w-[90%] w-full space-y-4 mx-auto">
                        {
                            queries.options.map((option,index) => (
                              <div key={index} className="flex items-center space-x-3  w-full border p-2">
                                <input type="radio" name="" id="" />
                                <label className=" font-medium  ">{option}</label>
                                {' '}

                              </div>
                            ))
                        }
                      </div>
                      {activeSlide === signUpQueries.length - 1 ? (
                        <button
                          type="button"
                          className="px-6 py-3 rounded-xl text-white hover:bg-[#0269d0] text-center w-[80%] mx-auto bg-[#0077ed] font-medium"
                        >
                          Finish
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="px-6 py-3 rounded-xl text-white hover:bg-[#0269d0] text-center w-[80%] mx-auto bg-[#0077ed] font-medium"
                          onClick={handleContinue}
                        >
                          Continue
                        </button>
                      )}
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        )
      }
      </div>
    </div>
  );
}
