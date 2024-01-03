import { faCheck, faCross, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Typography from '../generics/Typography';
import { usePathname } from 'next/navigation';


gsap.registerPlugin(ScrollTrigger);

export const pricing = [
  {
    plan: 'Free',
    intial: 'F',
    Price: '$0',
    color: 'text-green-500',
    border: 'border-[#6ccfef]',
    benefits: [
      'Responsive Website',
      'Online Store',
      'Products (Unlimited Variations) ',
      'Embed Instagram Feed',
      'Custom CSS Editor',
      'Support - 9AM - 6PM IST Mon - Fri',
      'Staff Accounts',
    ],
    addition: [
      'Order SMS Notificaitons',
      'Configurable Upsells/Crosssells',
      'Product Reviews',
      'Webhooks / Third party integrations',

    ],
  },
  {
    plan: 'Starter',
    intial: 'S',
    Price: '$14',
    color: 'text-red-500',
    border: 'border-[#5ed184]',
    benefits: [
      'Responsive Website',
      'Online Store',
      'Products (Unlimited Variations) ',
      'Embed Instagram Feed',
      'Custom CSS Editor',
      'Support - 9AM - 6PM IST Mon - Fri',
      'Staff Accounts',
      'Order SMS Notificaitons',
      'Configurable Upsells/Crosssells',
      'Product Reviews',
    ],
    addition: [
      'Webhooks / Third party integrations',
    ],
  },
  {
    plan: 'Pro',
    intial: 'P',
    Price: '$25',
    color: ' text-blue-500',
    border: 'border-[#6c81ef]',
    benefits: [
      'Responsive Website',
      'Online Store',
      'Products (Unlimited Variations) ',
      'Embed Instagram Feed',
      'Custom CSS Editor',
      'Support - 24 x 7',
      'Staff Accounts',
      'Order SMS Notificaitons',
      'Configurable Upsells/Crosssells',
      'Product Reviews',
      'Webhooks / Third party integrations',
    ],
  },
];

export default function HomeSectionEight() {
  const router = usePathname();
  const [showTable, setshowTable] = useState(router.pathname !== '/');
  const [activePlan, setActivePlan] = useState(0);
  const [planType, setPlanType] = useState(0)

  return (
    <div className=" bg-[#ffffff] dark:bg-black  ">
      <div className="py-[60px] lg:w-[90%] flex items-center flex-col mx-auto w-full px-6">
        <div className=" w-full overflow-hidden">
          <div className="  section-eight-text text-black dark:text-white flex flex-col items-center  space-y-6 w-full text-center ">
            {Typography({
              type: 'Jumbotron',
              mainHeading: 'Pricing',
              description: 'We provide different plans for our customers the Base one is Free ',
            })}
            {/* <div className=" text-white font-medium text-md"><LinkButton mainInnerText="Get Started" /></div> */}
          </div>
        </div>
        <div className={` w-[max-content] block bg-[#e2ecf7] dark:bg-[#2f2f2f] text-black dark:text-white font-medium text-md my-6  p-2 rounded-full  mx-auto flex items-center justify-center`}>
            <button onClick={() => setPlanType(0)} className={` ${planType === 0 ? '  rounded-full  text-white ring-4 ring-blue-200 bg-[#0077ed]  border  onClick={() => setActivePlan()}mx-auto ' : ' '} px-6 py-2 transition-all ease-linear duration-300 `}>Monthly</button>
            <button onClick={() => setPlanType(1)} className={` ${planType === 1 ? '  px-6 py-2 rounded-full  text-white ring-4 ring-blue-200 bg-[#0077ed]  border mx-auto ' : ' '} px-6 py-2 transition-all ease-linear duration-300 `}>Annualy</button>
          </div>
        <div className=" w-full  mx-auto grid lg:grid-cols-3 md:grid-cols-2 lg:gap-0 gap-5  mt-12">
          {
            pricing.map((price, index) => (
              <div key={index} style={{ boxShadow: index === 1 ? '0 0.125rem 0.375rem 0px rgba(0,0,0,.04),0px 0.3125rem 1.125rem 0 rgba(0,0,0,.06),0 1.5rem 5.1875rem 0 rgba(0,0,0,.1) ' : '' }} className={`   ${index === 1 ? ' bg-white dark:bg-[#2d2d2d] text-black dark:text-white lg:scale-[105%] scale-100 z-[99]' : ' bg-[#ECF9FF] dark:bg-[#1d1d1d] lg:scale-[98%] scale-100 '}    overflow-hidden   rounded-[40px]`}>
                <div className=" w-full flex flex-col  items-center h-full rounded-[3xl]  space-y-9 px-5 py-12  ">
                  <div className=" w-full  space-y-6 px-10">
                    <h1 className={`${price.color} font-medium  w-full text-start  text-2xl`}>
                      {price.plan}
                      {' '}
                    </h1>
                    <h1 className={`${index === 1 ? ' text-black ' : 'text-black'} dark:text-white text-6xl font-bold`}>
                      {price.Price}
                      /
                      <span className=" text-xl"> { planType === 0 ? "Month" : " Year " }</span>
                      {' '}
                    </h1>
                  </div>
                  <Link href="/register" className="px-6 py-3 text-center rounded-full border font-medium bg-[#0077ed] ring-4 ring-blue-200  text-white font-bold w-full text-md font-poppins">Sign Up</Link>
                  <ul className={` space-y-5  font-medium  ${index === 1 ? ' text-black' : ' text-black'} dark:text-white`}>
                    {
                        price.benefits.map((benifit,index) => (
                          <li key={index} className=" space-x-3">
                            <FontAwesomeIcon icon={faCheck} />
                            <span className="">{benifit}</span>
                          </li>
                        ))
                    }
                    {
                        price.addition && price.addition.map((add,index) => (
                          <li key={index} className=" space-x-3">
                            <FontAwesomeIcon icon={faX} />
                            <span className="">{add}</span>
                          </li>
                        ))
                    }
                  </ul>
                </div>

              </div>
            ))
          }
        </div>
        <div className=" mt-[50px]">
          <button onClick={() => setshowTable(!showTable)} className=" px-6 py-3 rounded-full font-medium text-md text-white ring-4 ring-blue-200 bg-[#0077ed] border mx-auto">Compare</button>
        </div>
      </div>
      <div className={`${showTable ? ' block' : ' hidden'} w-full bg-[#f5f5f5] dark:bg-black text-black dark:text-white  `}>

        <div className=" lg:w-[90%] mx-auto space-y-6 px-6 py-[60px]  w-full">
          <div className=" text-center">
            {
            Typography({
              type: 'Jumbotron',
              mainHeading: 'Compare Plans',
              textGd: 'bg-gradient-to-r from-orange-500 to-indigo-600 bg-clip-text text-transparent',
            })
          }
          </div>
          <div className={` w-[max-content] md:hidden block bg-[#e2ecf7] dark:bg-[#2f2f2f] font-medium text-md  p-2 rounded-full  mx-auto flex items-center justify-center`}>
            <button onClick={() => setActivePlan(0)} className={` ${activePlan === 0 ? '  rounded-full  text-white ring-4 ring-blue-200 bg-[#0077ed]  border  onClick={() => setActivePlan()}mx-auto ' : ' '} px-6 py-2 transition-all ease-linear duration-300 `}>Free</button>
            <button onClick={() => setActivePlan(1)} className={` ${activePlan === 1 ? '  px-6 py-2 rounded-full  text-white ring-4 ring-blue-200 bg-[#0077ed]  border mx-auto ' : ' '} px-6 py-2 transition-all ease-linear duration-300 `}>Starter</button>
            <button onClick={() => setActivePlan(2)} className={` ${activePlan === 2 ? '  px-6 py-2 rounded-full  text-white ring-4 ring-blue-200 bg-[#0077ed]  border mx-auto ' : ' '} px-6 py-2 transition-all ease-linear duration-300 `}>Pro</button>
          </div>
          <div  className=" md:grid hidden md:grid-cols-5 grid-cols-4 lg:text-base  text-sm  md:w-full w-[max-content]">
            <div className=" relative col-span-2  ">
              <h1 className="p-4 bg-[#e2ecf7] dark:bg-[#1f1f1f] sticky top-[70px]  font-semibold text-3xl ">Features</h1>
              <ul className=" font-medium   flex flex-col ">

                {
                pricing[2].benefits.map((benefit, index) => (
                  <li key={index} className={`${index % 2 ? ' bg-[#F5F5F5] dark:bg-[#2f2f2f] ' : ' bg-white dark:bg-black '} p-4   `}>{benefit}</li>
                ))
            }
              </ul>
            </div>
            <div className=" relative   text-center">
              <h1 className="p-4 bg-[#e2ecf7] dark:bg-[#1f1f1f] sticky top-[70px]   font-semibold text-3xl ">Free</h1>
              <ul className=" font-medium   flex flex-col ">
                {
                pricing[0].benefits.map((benefit, index) => (
                  <li key={index} className={`${index % 2 ? ' bg-[#F5F5F5] dark:bg-[#2f2f2f]' : ' bg-white dark:bg-black '} p-4 text-green-500  `}>
                    <FontAwesomeIcon icon={faCheck} />
                  </li>
                ))
            }
                {
                pricing[0].addition.map((benefit, index) => (
                  <li key={index} className={`${index % 2 ? ' bg-white dark:bg-black   ' : ' bg-[#F5F5F5] dark:bg-[#2f2f2f] '} p-4 text-red-500  `}>
                    <FontAwesomeIcon icon={faX} />
                  </li>
                ))
            }
              </ul>
            </div>
            <div className="   text-center border-2 relative border-blue-500">
              <h1 className="p-4 bg-[#e2ecf7] dark:bg-[#1f1f1f] sticky top-[70px]  font-semibold text-3xl ">Starter</h1>
              <ul className=" font-medium    flex flex-col ">
                {
                pricing[1].benefits.map((benefit, index) => (
                  <li key={index} className={`${index % 2 ? ' bg-[#F5F5F5] dark:bg-[#2f2f2f] ' : ' bg-white dark:bg-black '} p-4 text-green-500  `}>
                    <FontAwesomeIcon icon={faCheck} />
                  </li>
                ))
            }
                {
                pricing[1].addition.map((benefit, index) => (
                  <li key={index} className={`${index % 2 ? ' bg-[#F5F5F5] dark:bg-[#2f2f2f] ' : ' bg-white dark:bg-black '} p-4 text-red-500  `}>
                    <FontAwesomeIcon icon={faX} />
                  </li>
                ))
            }
              </ul>
            </div>
            <div className=" relative  text-center">
              <h1 className="p-4 bg-[#e2ecf7] dark:bg-[#1f1f1f] sticky top-[70px]  font-semibold text-3xl ">Pro</h1>
              <ul className=" font-medium    flex flex-col ">
                {
              pricing && pricing[2] && pricing[2].benefits.map((benefit, index) => (
                <li key={index} className={`${index % 2 ? ' bg-[#F5F5F5] dark:bg-[#2f2f2f] ' : ' bg-white dark:bg-black '} p-4 text-green-500  `}>
                  <FontAwesomeIcon icon={faCheck} />
                </li>
              ))
            }

              </ul>
            </div>
          </div>
          <div className="md:hidden grid grid-cols-4 text-sm ">
          <div className=" relative col-span-3 ">
              <h1 className="p-4 bg-[#e2ecf7] dark:bg-[#1f1f1f]   sticky top-[70px]  font-semibold text-lg ">Features</h1>
              <ul className=" font-medium  text-sm flex flex-col ">

                {
                pricing[2].benefits.map((benefit, index) => (
                  <li key={index} className={`${index % 2 ? ' bg-[#F5F5F5] dark:bg-[#2f2f2f] ' : ' bg-white dark:bg-black '} p-4 text-slate-600 dark:text-slate-200 line-clamp-1  `}>{benefit}</li>
                ))
            }
              </ul>
            </div>
            {

            activePlan === 0 ? (
              <div className=" relative col-span-1  text-sm text-center">
              <h1 className="p-4 bg-[#e2ecf7] dark:bg-[#1f1f1f] sticky top-[70px]   font-semibold text-lg ">Free</h1>
              <ul className=" font-medium   flex flex-col ">
                {
                pricing[0].benefits.map((benefit, index) => (
                  <li key={index} className={`${index % 2 ? ' bg-[#F5F5F5] dark:bg-[#2f2f2f] ' : ' bg-white dark:bg-black '} p-4 text-green-500  `}>
                    <FontAwesomeIcon icon={faCheck} />
                  </li>
                ))
            }
                {
                pricing[0].addition.map((benefit, index) => (
                  <li key={index} className={`${index % 2 ? ' bg-white  dark:bg-black ' : ' bg-[#F5F5F5] dark:bg-[#2f2f2f] '} p-4 text-red-500  `}>
                    <FontAwesomeIcon icon={faX} />
                  </li>
                ))
            }
              </ul>
            </div>
            ) : activePlan === 1 ? (
              <div className="   text-center  relative">
              <h1 className="p-4 bg-[#e2ecf7] dark:bg-[#1f1f1f] sticky top-[70px]  font-semibold text-lg ">Starter</h1>
              <ul className=" font-medium    flex flex-col ">
                {
                pricing[1].benefits.map((benefit, index) => (
                  <li key={index} className={`${index % 2 ? ' bg-[#F5F5F5] dark:bg-[#2f2f2f]  ' : ' bg-white dark:bg-black '} p-4 text-green-500  `}>
                    <FontAwesomeIcon icon={faCheck} />
                  </li>
                ))
            }
                {
                pricing[1].addition.map((benefit, index) => (
                  <li key={index} className={`${index % 2 ? ' bg-[#F5F5F5] dark:bg-[#2f2f2f] ' : ' bg-white dark:bg-black '} p-4 text-red-500  `}>
                    <FontAwesomeIcon icon={faX} />
                  </li>
                ))
            }
              </ul>
            </div>
            ) : (
              <div className=" relative  text-center">
              <h1 className="p-4 bg-[#e2ecf7] dark:bg-[#1f1f1f] sticky top-[70px]  font-semibold text-lg ">Pro</h1>
              <ul className=" font-medium    flex flex-col ">
                {
              pricing && pricing[2] && pricing[2].benefits.map((benefit, index) => (
                <li key={index} className={`${index % 2 ? ' bg-[#F5F5F5] dark:bg-[#2f2f2f] ' : ' bg-white dark:bg-black '} p-4 text-green-500  `}>
                  <FontAwesomeIcon icon={faCheck} />
                </li>
              ))
            }

              </ul>
            </div>
            )
            }

          </div>
        </div>
      </div>
    </div>
  );
}
