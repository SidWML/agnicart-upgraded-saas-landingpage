import React, { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Typography from '../generics/Typography';


export default function HomeSectionSeven() {
  const [accordianOpen, setAccordianOpen] = useState();
  const accordians = [
    {
      title: 'What is Website Builder',
      description: 'To create a website, you’d normally need a lot of graphic design, programming, and marketing knowledge. Or, you’d need to hire experts of those industries, e.g. a web developer, to get everything done for you – that can get expensive.You can also use a content management system (CMS) to build your website yourself, but you’ll need a fair amount of tech knowledge to navigate the system.Luckily, you can also use a website builder to save money and time, and build your kind of website, all by yourself.Agnicart is a site builder that allows you to create a beautiful website or a powerful eCommerce website in under an hour. You don’t need any prior knowledge in setting up websites or managing them either.Most of the website creation elements, from layout to design style, are taken care of for you when you use a site builder.',
    },
    {
      title: 'Do I need any coding Knowledge',
      description: 'No. There is absolutely no need to put yourself through programming courses to use Agnicart. And you certainly won’t need to hire a web developer either.Agnicart uses a drag and drop editor and requires no prior skills or knowledge to use. We’ve made sure that even a complete beginner will be comfortable using all of Agnicart’s features.All of the extensions and tools that are offered on our website building platform are designed to be as simple and quick to use as possible.Unlike other website builders, you won’t need any technical knowledge or technical skills to create a new website with Agnicart. In fact, you can get online with just a few clicks.Our drag and drop interface has all the features you need as a small business owner to get your site online.',
    },
    {
      title: 'Can I use my Custome Domain',
      description: 'Yes, we encourage you to do so. Although you can publish your Agnicart website under a subdomain that we will provide each website for free, having a website with a bespoke domain adds layers of trust and identity to your brand.You can get a unique site domain with Agnicart – free for 1 year to all of our Website and Business annual users.Connecting a domain to your Agnicart website is easy. Follow the on-screen instructions on Agnicart’s dashboard and visitors will be able to access your site via your domain in just a few hours.',
    },
    {
      title: 'Can I Host the website which i have created for free ?',
      description: 'Yes. All sites published with Agnicart get professional, fast, reliable, web hosting, with server locations all over the world.And the best news? Web hosting is free. Whether you have a local website or a global business website, it will always be available to your visitors and load quickly too.Agnicart professional hosting scales as your business grows, meaning you’ll always have the right support to bring your services online.Aside from free hosting, Agnicart websites are also perfectly secure. Keep your customers safe with a free ssl certificate with every website.',
    },
    {
      title: 'Do Websites  ?',
      description: 'Yes. All sites published with Agnicart get professional, fast, reliable, web hosting, with server locations all over the world.And the best news? Web hosting is free. Whether you have a local website or a global business website, it will always be available to your visitors and load quickly too.Agnicart professional hosting scales as your business grows, meaning you’ll always have the right support to bring your services online.Aside from free hosting, Agnicart websites are also perfectly secure. Keep your customers safe with a free ssl certificate with every website.',
    },
  ];

  return (
    <div className=" w-full text-black bg-white dark:bg-black dark:text-white ">
      <div className="  py-[60px] px-6 lg:w-[90%] w-full mx-auto grid md:grid-cols-3 grid-cols-1 gap-5 ">
        <div className="  col-span-1 md:text-start text-center  ">
          {Typography({
            type: 'Jumbotron',
            mainHeading: 'What the FAQ?',
          })}
        </div>
        <div className="w-full md:col-span-2 font-poppins flex flex-col gap-6 ">
          {
            accordians.map((accordian, index) => (
              <div key={index} style={{ boxShadow: 'rgba(0,0,0,0.3) 0 1px 3px' }} className=" w-full cursor-pointer  rounded-xl overflow-hidden dark:border ">
                <div onClick={() => (accordianOpen === index ? setAccordianOpen('') : setAccordianOpen(index))} className=" w-full flex items-center md:text-lg text-md font-bold  justify-between p-5">
                  {
                accordian.title
              }
                  <div className="">
                    <div className={` h-[2px] w-[15px] ${accordianOpen === index ? 'opacity-0' : '   opacity-100 '}  bg-black dark:bg-white dark:text-white `} />
                    <div className={` h-[2px] w-[15px] bg-black dark:bg-white duration-300 ease-linear ${accordianOpen === index ? ' rotate-0' : '   rotate-90 -translate-y-[2.5px] '}`} />
                  </div>
                </div>
                <div className={`w-full px-8 text  transition-height duration-300 font-light text-sm text-[#3b3b3b] dark:text-[#b9b9b9] text-justify ease-linear ${accordianOpen === index ? ' py-3 full' : 'h-[0px]'}`}>
                  {
                accordian.description
              }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
