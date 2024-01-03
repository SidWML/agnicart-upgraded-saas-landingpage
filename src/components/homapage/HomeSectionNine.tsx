import React from 'react';
import Link from 'next/link';
import Typography from '../generics/Typography';

export default function HomeSectionNine(props) {
  const { bg , gradientBg } = props
  return (
    <div className={`${bg} relative overflow-hidden`}>
      <div className=" space-y-6 relative py-[60px] flex flex-col lg:text-start text-center lg:items-start items-center min-h-[450px] z-[2] font-poppins lg:w-[90%] mx-auto px-6 text-white">
      {
            Typography({
                type:"Jumbotron",
                mainHeading:"Want to Build a Website ? Then what are you waiting for ?"
            })
        }
        <Link href="/" className="px-6 py-6 rounded-full border hover:bg-slate-200 hover:text-[#333]  font-bold lg:text-4xl md:text-2xl text-xl bg-white text-black block  w-[max-content] text-md font-poppins">Get Started - <span className=" font-semibold">It's Free</span></Link>
      </div>
      <div
            style={{ filter: "blur(100px)" }}
            className={` min-w-[50%] min-h-[50%]  absolute bottom-[-50%] z-[1]  rounded-full -translate-y-[50%] left-[100%] -translate-x-[100%] ${gradientBg}`}
          ></div>

    </div>
  );
}
