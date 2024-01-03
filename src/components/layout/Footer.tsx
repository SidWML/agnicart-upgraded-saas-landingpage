import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook, faFacebookF, faInstagram, faInstagramSquare, faLinkedin, faTwitter, faWhatsapp, faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
  const navLinks = [
    {
      linkName: 'Solutions',
      href: '',
      subLink: [
        {
          sublink: 'Create a E-commerce Store',
          href: '/solutions/e-commerce',
        },
        {
          sublink: 'Create your Website',
          href: '/solutions/create-website',
        },
        {
          sublink: 'Customize your Website',
          href: '/solutions/customization',
        },
        {
          sublink: 'Agnicart for  Developers',
          href: '',
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
        },
        {
          sublink: 'Blog',
          href: '/resources/blog',

        },
        {
          sublink: 'Hire an expert',
          href: '/resources/hire-expert',

        },
        {
          sublink: 'Tutorials',
          href: '/resources/tutorials',
        },
      ],
    },
    {
      linkName: 'Agnicart',
      href: '',
      subLink: [
        {
          sublink: 'About', href: '/about',

        },
        {
          sublink: 'Contact ',
          href: '/contact',
        },
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

  ];
  return (
    <div className=" w-full bg-black border-t border-[#474444]  ">
      <div className="py-[60px] mx-auto space-y-8  lg:w-[90%]  px-6">

        <div className="lg:grid-cols-6 md:grid-cols-2 grid-cols-1 grid gap-8 ">
          <div className=" md:col-span-2 md:w-[90%] col-span-1  overflow-hidden text-white h-full flex flex-col  ">
            <h1 className="text-[28px] font-semibold md:text-start text-center  mb-3">Ready to Move Forward and Get the Latest Insights.</h1>
            <div className="w-full  flex relative h-[55px] mb-3">
              <input type="text" placeholder="Enter Your Email" className="h-full px-4 dark:text-white text-black text-[18px] font-medium rounded-lg outline-none w-full" />
              <button className=" absolute bg-gradient-to-br from-[#0077ed] to-[#80c1f6]  rounded-lg p-3 right-[0.5%] top-[50%] -translate-x-[0.5%] -translate-y-[50%] ">
                <FontAwesomeIcon className="w-[25px] h-[18px] newsletter" icon={faPaperPlane} />
                {' '}
              </button>
            </div>
            <div className="flex gap-5 flex-row md:justify-start justify-center items-center space-x-4 py-3">
              <Link href="">
                <FontAwesomeIcon
                  className="h-[30px] h-[30px]"
                  icon={faLinkedin}
                />
              </Link>
              <Link href="">
                <FontAwesomeIcon
                  className="text-white h-[30px] h-[30px]"
                  icon={faFacebookF}
                />
              </Link>
              <Link href="">
                <FontAwesomeIcon
                  className="text-white h-[30px] h-[30px]"
                  icon={faTwitter}
                />
              </Link>
              <Link href="">
                <FontAwesomeIcon
                  className="text-white h-[30px] h-[30px]"
                  icon={faInstagram}
                />
              </Link>
            </div>
          </div>
          {
          navLinks.map((nav) => (
            <div className=" col-span-1 md:text-start text-center space-y-3 w-full ">
              <h1 className=" text-white w-full font-medium text-2xl ">{nav.linkName}</h1>
              <ul className=" font-medium  text-md space-y-4 text-slate-400">
                {
                  nav.subLink && nav.subLink.map((sub) => (
                    <li className=""><Link href={sub.href}>{sub.sublink}</Link></li>
                  ))
                }
              </ul>
            </div>
          ))
        }
        </div>
        <div className="w-full h-full mx-auto flex md:flex-row flex-col py-4 border-t border-slate-700 text-[18px] text-white justify-between items-center">
      <h1 className="">© 2023 All Rights Reserved</h1>
      <div className="space-x-4 text-[#cac9c9]">
        <Link href="" className="">Sitemap</Link>
        <Link href="" className="">Terms of Use</Link>
        <Link href="" className="">Privacy Policy</Link>
      </div>
    </div>
      </div>

    </div>
  );
}
