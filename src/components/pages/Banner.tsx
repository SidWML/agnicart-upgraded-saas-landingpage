import React, { useEffect } from 'react';
import Typography from '../generics/Typography';
import LinkButton from '../generics/Link';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function Banner(props) {
    const { mainHeading, description , img, bgGradient,mainInnerText  } = props

    useEffect(() => {
      gsap.fromTo('.banner', { y: '100px', opacity: 0 }, { duration: 1, y: '0px', opacity: 1, zIndex:5 });
    }, []);
  


  return (
    <div className=" relative banner  lg:w-[90%] space-y-6 mx-auto w-full md:pt-[150px] pt-[100px] pb-[30px]  ">
      <div className="w-[80%] m-auto text-white z-[3] h-[max-content] space-y-8 relative flex flex-col">
          <div className=" w-full cutomers space-y-8 flex items-center  flex-col z-[2]">
            <h1 className=" lg:text-[5vw] md:text-[7vw] lg:leading-[85px] relative z-[3] md:leading-[60px] leading-[40px] text-center text-[7vw] w-full font-bold">
             {mainHeading}
            </h1>
            <p className=" text-center font-medium lg:w-[60%] z-[3] relative w-full mx-auto md:text-xl text-md">
              {description}
            </p>
            <LinkButton mainInnerText={mainInnerText} href="/register" />
          </div>
        </div>
        <div className="col-span-1  z-[2]  ">
            <img src={img} alt="" className=" z-[2] max-w-full max-h-full m-auto " />
        </div>
    </div>
  );
}
