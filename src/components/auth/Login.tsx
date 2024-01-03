"use client"
import React from 'react';
import Link from 'next/link';
import Input from '../generics/Input';
import LinkButton from '../generics/Link';
import UseDarkTheme from '../layout/UseDarkTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const [colorTheme, setMode] = UseDarkTheme()
  return (
    <div className=" bg-white dark:bg-black text-black dark:text-white ">
      <div className="lg:w-[90%] w-full px-6 mx-auto p-4 flex items-center justify-between">
        <Link  href="/"><img src="https://www.agnicart.com/static/images/logo/agni-cart.png" alt="" className="" /></Link>
       <div className=" flex items-center space-x-4">
       <div className=" font-medium text-md text-white">
          <LinkButton href="/register" mainInnerText="Sign Up" />
        </div>
        <label style={{boxShadow: colorTheme === "light" ? "inset 1px 2px 3px #1b1a1a, inset -1px -2px 3px #2f2f2f" : "inset rgba(0,0,0,0.3) 0px 1px 3px"}} htmlFor="dark-mode-switch" className=" flex items-center justify-between  dark:text-white  w-[50px] rounded-2xl relative h-[25px]  ">
              <div onClick={() => setMode('light')} className={`${colorTheme === 'dark' ? ' bg-[#d7f5f2]  text-white ' : '  text-black dark:text-white'} w-[50%] h-[25px]  rounded-full flex items-center justify-center`}> <img src="/sun.png" alt="" className=" w-[15px] h-[15px]" /> </div>
              <div onClick={() => setMode('dark')} className={`${colorTheme === 'light' ? ' bg-[#383737] text-blue-100' : ' '} w-[50%] h-[25px]  rounded-full flex text-black items-center justify-center`}><FontAwesomeIcon icon={faMoon} /></div>
            </label>
       </div>
      </div>
      <div className="w-full flex items-center justify-center  min-h-[90vh]  md:py-0 py-[60px]">
        <div className=" overflow-hidden    rounded-3xl   lg:w-[32%]  md:w-[65%] w-full ">
          <div className="  p-6 space-y-8">
            <div className=" text-center font-medium space-y-3">
              <h1 className=" font-bold md:text-3xl text-xl  w-full text-center">Welcome Back to AgniCart!</h1>
              <p className=" text-sm text-slate-600 dark:text-slate-300">We're thrilled to have you back at AgniCart</p>
            </div>
            <div className="w-full space-y-3   ">
              <Link style={{ boxShadow: 'rgba(0,0,0,0.3) 0px 1px 3px' }} className="  rounded-xl bg-[#eeeeef] dark:bg-[#2f2f2f] space-x-2 flex font-normal  items-center justify-center  p-3 border dark:border-black  w-full" href="">
                <img src="/google.png" alt="" className=" w-[20px] h-[20px]" />
                <span className="">Log in using Google </span>
                {' '}
              </Link>
              <Link style={{ boxShadow: 'rgba(0,0,0,0.3) 0px 1px 3px' }} className="  rounded-xl bg-[#eeeeef] dark:bg-[#2f2f2f] space-x-2 flex font-normal  items-center justify-center  p-3 border dark:border-black  w-full" href="">
                <img src="/fb.png" alt="" className=" w-[20px] h-[20px]" />
                <span className="">Log in using Facebook </span>
                {' '}
              </Link>

            </div>
            <div className=" flex items-center justify-between  w-full ">
              <div className="w-[45%] h-[0.5px] bg-slate-300" />
              <span className="block">OR</span>
              <div className="w-[45%] h-[0.5px] bg-slate-300" />
              <hr />
            </div>
            <div className=" space-y-2">
              <div className=" space-y-6 ">
                <Input required label="Email" type="email" placeholder="Email or Username" bgColor="bg-slate-100" />
                <Input required label="Password" type="password" placeholder="Password" bgColor="bg-slate-100" />

                <button type="submit" className="px-6 py-3 rounded-xl text-white hover:bg-[#0269d0] text-center w-full bg-[#0077ed] font-medium ">Log In</button>

              </div>
              <div className=" flex items-center justify-between">
                <Link href="/register" className=" font-light text-xs underline text-slate-700 dark:text-slate-300">Don't have an account ?</Link>
                <Link href="/forget-password" className=" font-light text-xs underline text-slate-700 dark:text-slate-300">Forgot Password ?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
