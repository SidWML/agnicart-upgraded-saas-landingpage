/* eslint-disable jsx-a11y/anchor-is-valid */
"use client"
import {
  faChevronDown, faChevronUp, faMoon, faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import UseDarkTheme from './UseDarkTheme';

export const navLinks = [
  {
    linkName: 'Solutions',
    href: '',
    subLink: [
      {
        sublink: 'Create a E-commerce Store',
        href: '/solutions/e-commerce',
        icon: '/nav/cart.png',
        desc: 'Want to sell your product online then set up a store',
      },
      {
        sublink: 'Create your Website',
        href: '/solutions/create-website',
        icon: '/nav/cms.png',
        desc: 'Build your Website',
      },
      {
        sublink: 'Customize your Website',
        href: '/solutions/customization',
        icon: '/nav/cust.png',
        desc: 'Edit your Existing website data',
      },
      // {
      //   sublink: 'Agnicart for  Developers',
      //   href: '',
      //   icon: '/nav/api.png',
      //   desc: 'Manage your website data from our Fast   API',
      // },
    ],
  },
  {
    linkName: 'Features',
    href: '/features',
    subLink: [
      {
        sublink: 'Design and Layouts',
        href: '/features/design-layouts',
        icon: '/nav/themes.png',
        desc: 'Create Flexible layouts',
      },
      {
        sublink: 'Navigation',
        href: '/features/navigation',
        icon: '/nav/nav.png',
        desc: 'Make navigation user-experience easy ',
      },
      {
        sublink: 'CMS',
        href: '/features/cms',
        icon: '/nav/cms.png',
        desc: 'Create dynamic Content for your website',
      },
      {
        sublink: 'SEO & Performance',
        href: '/features/seo',
        icon: '/nav/seo.png',
        desc: 'Fast up and Increase Visibility of your sites by Optimizing SEO  ',
      },
    ],
  },
  {
    linkName: 'Resources',
    href: '',
    subLink: [
      {
        sublink: 'Templates',
        href: '/resources/templates',
        icon: '/nav/themes.png',
        desc: 'We have 100+ of templates choose one now',
      },
      {
        sublink: 'Blog',
        href: '/resources/blog',
        icon: '/nav/blogs.png',
        desc: 'Start a Blog',
      },
      {
        sublink: 'Hire an expert',
        href: '/resources/hire-expert',
        icon: '/nav/expert.png',
        desc: 'Now you can hire an expert to build your website and manage your website',
      },
      {
        sublink: 'Tutorials',
        href: '/resources/tutorials',
        icon: '/nav/tutorials.png',
        desc: 'We have pre-recorded videos of website building and many more... ',
      },
    ],
  },
  {
    linkName: 'Templates',
    href: '/templates',
  },
  {
    linkName: 'Customers',
    href: '/customers',
  },
  {
    linkName: 'Pricing',
    href: '/pricing',
  },
];
export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [dropDown, setDropDown] = useState();
  const dropdownRef = useRef();
  const [checked, setChecked] = useState(false);
  const [colorTheme, setMode] = UseDarkTheme();

  useEffect(() => {
    // Event listener to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };

    // Attach the event listener to the window
    window.addEventListener( "mouseleave", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('mouseleave', handleClickOutside);
    };
  }, []);

  const handleDropdown = (link, index) => {
    if (link.subLink && link.subLink.length) {
      setDropDown((prev) => (prev === index ? null : index));
    } else {
      setDropDown(null);
    }
  };


  return (
    <div ref={dropdownRef} className=" fixed  top-0 right-0  left-0 z-[100]">
      {/* This is for large screen navbar */}
      <div className="w-full   backdrop-blur-sm border-b border-[#474444]  bg-black  ">
        <div className=" lg:w-[90%] w-full font-poppins  py-4 px-6 text-white gap-3 flex font-semibold justify-between text-sm  items-center  mx-auto">
        <div onClick={() => setSidebar(!sidebar)} className=" lg:hidden flex  flex-col gap-2 ">
              <div className={` w-[35px] h-[3px] bg-white duration-300 ease-linear ${sidebar ? ' translate-y-1 rotate-45 ' : ' translate-x-0'}`} />
              <div className={` w-[35px] h-[3px] bg-white duration-300 ease-linear ${sidebar ? ' hidden ' : ' '}`} />
              <div className={` w-[35px] h-[3px] bg-white duration-300 ease-linear ${sidebar ? '-translate-y-2 -rotate-45 ' : ' translate-y-0  '}`} />
            </div>
          <Link href="/" className="  md:w-[15%] w-[40%]">
            <img src="https://www.agnicart.com/static/images/logo/agni-cart.png" alt="" className="" />
          </Link>
          <ul className=" lg:flex hidden justify-between  items-center  w-[45%] ">
            {navLinks.map((link, index) => (
              <li
              key={index}
                onClick={() => handleDropdown(link, index)}
                className={`py-2 ${typeof dropDown === 'number' && dropDown === index ? ' border-b' : ' '} space-x-2`}
              >
                {link.subLink && link.subLink.length ? <button>{link.linkName}</button> : <Link href={link.href}>{link.linkName}</Link> }
                {link.subLink && link.subLink.length && (
                  <FontAwesomeIcon className={` text-xs ${dropDown === index ? ' rotate-0 ' : ' rotate-180'} duration-300 ease-linear  `} icon={faChevronUp} />
                )}
              </li>
            ))}
          </ul>
          <div className=" flex items-center ml-auto justify-end lg:w-[28%] space-x-3 ">
            <Link className="px-6 h-[40px] flex items-center justify-center py-3 border border-[white]hover:border-black" href="/login">
              Login
            </Link>
            {/* <Link href=""  ><a className='px-4 py-2 border rounded-full'>Contact Us</a></Link> */}
            <Link className="px-4 py-3  h-[40px]  md:flex items-center justify-center hidden  bg-[#0077ed]" href="/register">
              Get Started -
              {' '}
              <span className=" font-normal">It's Free</span>
            </Link>
            <label style={{boxShadow:"inset 3px 3px 5px #1b1a1a, inset -3px -3px 5px #2f2f2f"}} htmlFor="dark-mode-switch" className=" flex items-center justify-between  dark:text-white  w-[50px] rounded-2xl relative h-[25px]   ">
              <div onClick={() => setMode('light')} className={`${colorTheme === 'dark' ? '  bg-[#2f2f2f]  text-white ' : '  text-black dark:text-white'} w-[50%] h-[25px]  rounded-full flex items-center justify-center`}> <img src="/sun.png" alt="" className=" w-[15px] h-[15px]" /> </div>
              <div onClick={() => setMode('dark')} className={`${colorTheme === 'light' ? ' bg-[#383737] text-white' : ' text-white '} w-[50%] h-[25px]  rounded-full flex items-center justify-center`}><FontAwesomeIcon icon={faMoon} /></div>
            </label>
            
          </div>
        </div>
      </div>
      {/* This is for large screen dropdown */}
      <div

        style={{ boxShadow: '0 4px 12px -6px gray' }}
        className={`w-full  lg:absolute lg:block hidden overflow-hidden ${
          typeof dropDown === 'number' ? 'lg:translate-y-0 h-[max-content] lg:opacity-100  overflow-hidden ' : ' translate-y-[-3%] h-0  opacity-0 '
        } duration-300 ease-linear text-black bg-[white]  z-[999] transition-all py-2 `}
      >
        <div className=" w-[90%]  mx-auto px-6 h-full grid grid-cols-3  items-center">
          <div className=" col-span-2 grid grid-cols-3 w-full gap-5 mb-auto py-12">
            {navLinks
              .filter((navlink, index) => index === dropDown)
              .map(
                (item) => item.subLink
                  && item.subLink.map((link,subIndex) => (
                    <Link key={subIndex} href={link.href} className="font-poppins p-2 flex gap-3 col-span-1 font-medium">
                      <img src={link.icon} alt="" className=" w-[20px] h-[20px] mt-0.5" />
                      <div className=" flex flex-col col-span-1 w-full    ">
                        <span className="">{link.sublink}</span>
                        <p className=" font-light text-xs">{link.desc && link.desc}</p>
                      </div>
                    </Link>
                  )),
              )}
          </div>
          <div className=" col-span-1 w-full h-[100%] my-auto p-6 border-l-2 space-y-3">
            <h1 className=" font-medium font-poppins">Are you ready to Start</h1>
            <div className=" flex flex-col text-sm font-medium space-y-3 text-[#3b3b3b] ">
              <Link className=" py-1.5 border-b" href="/templates">
                Explore Templates
              </Link>
              <Link className=" py-1.5 border-b" href="/customers">
                Find Inspirations
              </Link>
              <Link className=" py-1.5 border-b" href="/customers">
                Our Customers Stories
              </Link>
              <Link className=" py-1.5 border-b" href="/contact">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* This is for medium and mobile screen side navbar */}
      <div
        className={` absolute overflow-y-scroll  right-0 bg-white ${
          sidebar ? '  translate-x-0 lg:w-0 h-0 md:w-[50vw] w-[100%] h-[100vh] ' : ' translate-x-[100%] lg:w-0 h-0 md:w-[80vw] w-[100%] h-[100vh]'
        } duration-300 ease-linear`}
      >
        <ul className=" flex flex-col p-12 w-full ">
          {navLinks.map((link, index) => (
            <>
              <li
                onClick={() => handleDropdown(link, index)}
                className={`py-2 ${
                  typeof dropDown === 'number' && dropDown === index ? ' border-b' : ' '
                } space-x-2 flex items-center justify-between font-medium  text-xl`}
              >
                {
                  link.subLink && link.subLink.length ? (
                    <button>{link.linkName}</button>
                  ) : <Link href={link.href}>{link.linkName}</Link>
                }
                {link.subLink && link.subLink.length && (
                  <FontAwesomeIcon className=" text-xs" icon={dropDown === index ? faChevronUp : faChevronDown} />
                )}
              </li>
              <div className={`  flex-col overflow-hidden duration-300 ease-linear py-4 ${typeof dropDown === 'number' && dropDown === index ? ' flex ' : ' hidden'}`}>
                {navLinks
                  .filter((navlink, index) => index === dropDown)
                  .map(
                    (item) => item.subLink
                      && item.subLink.map((link) => (
                        <Link href={link.href} className=" flex py-2 items-center text-md  w-full  space-x-3 font-medium ">
                          <div className="">
                            <img src={link.icon} alt="" className=" w-[20px] h-[20px]" />
                          </div>
                          <span className="">{link.sublink}</span>
                        </Link>
                      )),
                  )}
              </div>
            </>
          ))}
          <Link className="px-4 py-3 text-center text-white block mt-6  bg-[#0077ed]" href="/register">
            Get Started -
            {' '}
            <span className=" font-normal">It's Free</span>
          </Link>
        </ul>

      </div>
    </div>
  );
}
